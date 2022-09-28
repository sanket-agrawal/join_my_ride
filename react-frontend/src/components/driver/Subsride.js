import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Subsride() {

    //getting state from local storage

   
    const navigate = useNavigate();

    //states
    const [driver,setDriver] = useState({});
    const [source,setSource]=useState('');
    const [dest,setDest] = useState('');
    const [date,setDate]=useState('');
    const [time,setTime] = useState('');
    // const [type,setType]=useState('');
    const type = "SUBSCRIPTION";
    const [charges,setCharges]=useState('');
    

    //error checking
    const [submitted,setSubmitted] = useState('');
    const [error,setError] = useState('');


    useEffect(()=>{
        let driver = JSON.parse(sessionStorage.getItem('driver-info'));
        setDriver(driver)
   },[])

    //handlers
    const handleSource= (e) => {
        setSource(e.target.value);
        setSubmitted(false);
    }

    const handleDest= (e) => {
        setDest(e.target.value);
        setSubmitted(false);
    }

    const handleDate= (e) => {
        setDate(e.target.value);
        setSubmitted(false);
    }

    const handleTime=(e)=>{
        setTime(e.target.value);
        setSubmitted(false);
    }

    // const handleType= (e) => {
    //     setType(e.target.value);
    //     setSubmitted(false);
    // }

    const handleCharge= (e) => {
        setCharges(e.target.value);
        setSubmitted(false);
    }

    //form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if(source === '' || dest === '' || date === '' || type === '' || charges === ''){
            setError(true);
        }else{
            axios.post(`http://localhost:8080/driver/addride/${driver.did}`,{
                source,
                dest,
                date,
                time,
                charges,
                type
            }).then(res=>console.log('posting data',res)).catch(err=>console.log(err));

            setSubmitted(true);
            setError(false);
        }
    };

    //sucess message
    const successMessage = () =>{
        return(
            <div className='success'
            style={{
                display:submitted ? '' : 'none',
            }}>
                <h2>Ride Added successfully</h2>
                
            </div>
        )
    };

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

     function logout(){
        sessionStorage.clear();
        navigate("/driver/Login");
     }

     function back(){
        
        navigate("/driver/controller");
     }



  return (
    <div className='cont'>
        <div>
           
        </div>
        <div className='messages'>
            {errorMessage()}
            {successMessage()}
        </div>
        <div className='form-container sign-up-container'>
        <h1>Add Rides(Subscription) </h1>
            <form>
        <table>
            <tr>
                <td>
                <label className='label'>Source : </label>
                </td>
                <td>
                <input onChange={handleSource}
                className="input"
                value={source}                
                type="text"></input>
                </td>
            </tr>
            <tr>
                <td>
                <label className='label'>Destination :</label>
                </td>
                <td>
                <input onChange={handleDest}
                className="input"
                value={dest}
                type="text"></input>
                </td>
            </tr>
            <tr>
                <td>
                <label className='label'>Date :</label>
                </td>
                <td>
                <input onChange={handleDate}
                className="input"
                value={date}
                 type="date"></input>
                </td>
            </tr>
            <tr>
                <td>
                <label className='label'>Time :</label>
                </td>
                <td>
                <input onChange={handleTime}
                className="input"
                value={time}
                 type="time" placeholder='time'></input>
                </td>
            </tr>
            {/* <tr>
                <td>
                <label className='label'>Type :</label>
                </td>
                <td>
                <input onChange={handleType}
                className="input"
                value={type}
                 type="text"></input>
                </td>
            </tr> */}
            <tr>
                <td>
                <label className='label'>Charges :</label>
                </td>
                <td>
                <input onChange={handleCharge}
                value={charges}
                className='input'
                type="number"></input>
                
                </td>
            </tr>
           <tr>
            <td></td>
            <td> <button
                onClick={handleSubmit}
                 type='submit'>Add Ride</button></td>
           </tr>
               
                
                {/* <tr>
                    <td>
                        <button onClick={logout}>Logout</button>
                    </td>
                    <td>
                        <button onClick={back}>Go back to Driver Dashboard</button>
                    </td>
                </tr> */}
        
        
        </table>
        </form>
        </div>
           
       
    </div>
  )
}

export default Subsride