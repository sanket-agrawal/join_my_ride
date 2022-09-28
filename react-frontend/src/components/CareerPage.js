import React,{useState} from 'react'
import { Form,Button,Card,Col } from 'react-bootstrap';
import axios from 'axios';



function CareerPage()
 {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [mobile,setMobile] = useState('');
  const [edu,setEdu] = useState('');
  const [url,setUrl] = useState('');
  const [submitted,setSubmitted] = useState('');
  const [error,setError] = useState('');
  const [about,setAbout] = useState('');

  const handleName = (e)=>{
    setName(e.target.value);
    setSubmitted(false);
  }

  const handleEmail = (e)=>{
    setEmail(e.target.value);
    setSubmitted(false);
  }

  const handleMobile = (e)=>{
    setMobile(e.target.value);
    setSubmitted(false);
  }

  const handleEdu = (e)=>{
    setEdu(e.target.value);
    setSubmitted(false);
  }

  const handleUrl = (e)=>{
    setUrl(e.target.value);
    setSubmitted(false);
  }

  const handleAbout = (e)=>{
    setAbout(e.target.value);
    setSubmitted(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(name === '' || email === '' || mobile === '' || edu === '' || url === '' || about === ''){
        setError(true);
    }else{
        axios.post("http://localhost:8080/home/career",{
            name,
            email,
            mobile,
            edu,
            url
        }).then(res=>console.log('posting data',res)).catch(err=>console.log(err));

        setSubmitted(true);
        setError(false);
    }
};

const successMessage = () =>{
  return(
      <div className='success'
      style={{
          display:submitted ? '' : 'none',
      }}>
          <h2>Application Submitted successfully</h2>
          
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


  
    return (
      <div>
        <div>

        </div>
        <table>
          <tr>
            <td> Name :</td>
            <td><input onChange={handleName}
             type = "text"
             className="input"
             value={name}
             ></input></td>
          </tr>
          <tr>
            <td> Email Id :</td>
            <td><input onChange={handleEmail}
             type = "email"
             className="input"
             value={email}
             ></input></td>
          </tr>
          <tr>
            <td> Mobile :</td>
            <td><input onChange={handleMobile}
             type = "number"
             className="input"
            value={mobile}
             ></input></td>
          </tr>
          <tr>
            <td> Highest Qualification :</td>
            <td><input onChange={handleEdu}
             type = "text"
             className="input"
             value={edu}
             ></input></td>
          </tr>
          <tr>
            <td> Linkedin Url :</td>
            <td><input onChange={handleUrl}
            type = "text"
            className="input"
            value={url}
            ></input></td>
          </tr>
          <tr>
            <td> Tell us about yourself :</td>
            <td><textarea onChange={handleAbout}
             className="input"
            value={about}
            ></textarea></td>
          </tr>
          <tr >
            <td><button onClick={handleSubmit}>Apply</button></td>
            
          </tr>
        </table>
    </div>
    );
  
}

export default CareerPage