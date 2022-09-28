import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {useEffect} from 'react'

function NewPayment() {

    const navigate = useNavigate();
    const random = Math.floor(100000 + Math.random() * 900000);
    const [otp, setOtp] = useState('');
    const [cust,setCustomer]=useState({});
    const [rid,setRid]= useState('');


    const handleOtp = (e) =>{
        setOtp(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(otp.localeCompare(random.toString())){
            console.warn("Correct Otp");
            bookride();
            navigate('/customer/payment')

            
        }else{
            console.warn("Wrong Otp,Please try again");
            console.log(otp);
            navigate("/")
        }
    }   

    useEffect(()=>{

        let cust = JSON.parse(sessionStorage.getItem('user'))
        setCustomer(cust)
       
        let rid = JSON.parse(sessionStorage.getItem('rid'))
        setRid(rid);

    },[])


    const bookride = ()=>{
        axios.post(`http://localhost:8080/customer/bookride/${cust.cid}/${rid}`)
        .then(res=>{console.log('posting data' ,res)
        
        .catch(err=> console.log(err))
    })
    
    };
    



  return (

        <div>
            <label>Enter Otp </label>
            <input type="number" value={otp} onChange={handleOtp}></input>
            <button onClick={handleSubmit}>Verify Otp</button>
            
        </div>
   
  )
}

export default NewPayment