import axios from 'axios';
import React, { Component } from 'react';
import { useEffect } from 'react';
import {useState} from 'react';
import { json } from 'react-router-dom';
import DoneD from './DoneD';

function Done (){
    
    const [cust,setCustomer]=useState({});
    
    const [ride,setRide]=useState({});


    const random = Math.floor(100000 + Math.random() * 900000);
   
    useEffect(() => {
        
        let cust = JSON.parse(sessionStorage.getItem('user'))
        setCustomer(cust)
    
    
        let ride = JSON.parse(sessionStorage.getItem('ride'))
        setRide(ride)

        let rid= ride.rid;
        let cid = cust.cid;

        const timer = setTimeout(() => {  
   
         axios.post("http://localhost:8080/mail/booking-mail",{
            cid,
            rid,
            random
        }).then(res=>console.log(res))

    }, 0);
    return () => clearTimeout(timer);

    },[])


   
        return (
            <div>
                <h2>Dear User you will receive an email with OTP please use that OTP to start the Ride</h2>
            </div>
        );
    
}

export default Done;