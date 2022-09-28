

import { useState ,useEffect} from 'react';
import axios from 'axios'   
import { Table} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import'/node_modules/bootstrap/dist/css/bootstrap.min.css'
import Contact from '../../Pages/Contact';





 
 function CustDash() {

  let navigate =useNavigate();
  
  //load customer data 
  const user= JSON.parse(sessionStorage.getItem("user"));

   
  // const [rid,setRid] = useState('');

  // States for registration
  const [source, setSource] = useState('');
  const [dest, setDestination] = useState('');

  const [date, setDate] = useState('');
  const [ride, setRide] = useState({});
 
  
  
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Handling the name change
  const handleSource = (e) => {
    setSource(e.target.value);
    setSubmitted(false);
  };
  const handleDestination = (e)=>{
    setDestination(e.target.value);
    setSubmitted(false);
  }
 
  // Handling the email change
  const handleDate = (e) => {
    setDate(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  // const handleSubscribe = (e) => {
  //   setSubscribe(e.target.value);
  //   setSubmitted(false);
  // };


 
  // Handling the form submission
     function handleSubmit(){
    // e.preventDefault();
    if (source === '' || dest===''||  date === '' ) {
      setError(true);
    } else {
    
         axios.post('http://localhost:8080/customer/findride/normal',{
            source,
            dest,
            date
           

        }).then(res => {console.log('posting data' ,res)
    
        sessionStorage.setItem('rides',JSON.stringify(res.data))
        setTimeout(function showRides(){
          if(sessionStorage.getItem('user')){
            
            navigate('/rides')
          }
          else{
            navigate('/customer/login')
          }
           
          },10)
              
      })
        .catch(err=> console.log(err))
      setSubmitted(true);
      setError(false);
    
  };}

 

   
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1></h1>
      </div>
    );
  };
 
//Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  
 
  return (
    <div className="form">
    
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
      <div className="container">
      <div className="row">
      <div className="col-6"><img src={require("./backimg12.jpg")} height="300px" width="430px"  ></img></div>
        <div  className="col-6 conta">
      
        <Table border={0} cellSpacing={0} cellPadding={7} className="findtable">
      
        {/* Labels and inputs for form data */}
        <tbody>
        <tr>
            <td>
        <label className="label">Source</label>
        </td>
        <td>
        <input onChange={handleSource} className="input"
          value={source} type="text" /> 
        </td>
        </tr>

        <tr>
            <td>
        <label className="label">Destination</label> 
            </td>
       
        <td> <input onChange={handleDestination} className="input"
          value={dest} type="text"/> 
        </td>
        </tr>

        <tr>
            <td>
        <label className="label">Date</label>
        </td>
        <td>
        <input onChange={handleDate} className="input"
          value={date}  type="date" /> 
          </td>
        </tr>
        
        
        
       
        </tbody>

        </Table>
        <button  type="submit" onClick={handleSubmit}>
          Search
        </button> &nbsp; &nbsp;
        <button onClick={()=>{navigate('/customer/login')}}>Customer Login</button>
        </div>
        
        </div>
        </div>
       
        <div>
              </div>
        <div></div>
     <div><hr /></div>
     <div><h2>OR</h2></div>

        <div>
          <button  onClick={()=>{navigate('/driver/login')}}>Add ride</button> 
        </div>

      
        
        
        <div>
        {/* <button className="btn" onClick={()=>{navigate('/customer/previous_rides')}}>
          Previous Rides
        </button> */}
            
        </div>

        <Contact/>
      

       
      
    </div>
  );
      }

export default CustDash;


    