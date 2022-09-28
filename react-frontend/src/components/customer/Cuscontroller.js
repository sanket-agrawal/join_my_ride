import { useNavigate } from "react-router-dom"
import axios from 'axios';

import { useState } from 'react';
import { useEffect } from 'react';

export default function Custcontroller(){

    const [cust,setCust] =useState({});


    useEffect(()=>{
        let cust = JSON.parse(sessionStorage.getItem('user'))
        setCust(cust)

    },[])

    const subject = "JoinMyRide:Attention";
    const body = "Your account has been deactivated...!!!!!";


    const email = cust.email;

    const confirm =()=>{
        if (window.confirm("Are you sure") == true) {
          deactivatate()
        } else {
         navigate('/customer/controller')
        }
      }


    async function deactivatate (){
        const result =await axios.delete(`http://localhost:8080/customer/deactivate/${cust.cid}`).then(res=>alert(res.data));
        sessionStorage.clear()
          
          await axios.post(`http://localhost:8080/mail/send-mail`,{
           email,subject,body
            
          })
      
         }

    let navigate = useNavigate();
    return(
        <div>
        <button onClick={()=>{navigate("/")}}>Search Rides</button>
        <button onClick={()=>{navigate("/customer/prevrides")}}>Previous rides</button>
        <button onClick={()=>{navigate("/customer/update")}}>Update Profile</button>
        <button onClick={()=>{navigate("/customer/deactive");confirm()}}>Deactivate</button>
        </div>
    )
}