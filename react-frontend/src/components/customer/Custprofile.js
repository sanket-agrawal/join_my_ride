import React, { useEffect, useState } from 'react';
import'./styles/login.css';

function Custprofile() {

    const user = JSON.parse(sessionStorage.getItem('user'))
    const [name,setDname] = useState('');
    const [email,setEmail] = useState('');
    const [mobile,setMobile] = useState('');
    const [adhar,setAdhar] = useState('');
   const [cid,setCid]=useState('');
    const [uid,setUid] = useState('');

    useEffect(()=>{
        getUser();
    },[])

    function getUser(){
        setDname(user.name);
        setEmail(user.email);
        setMobile(user.mobile);
        setAdhar(user.adhar);
      
        setUid(user.uid);
    }

    function updateUser(){
        let newuser = {cid,name,email,mobile,adhar,uid}
        console.warn("Updated User : ", newuser);
        fetch(`http://localhost:8080/driver/update-profile/${user.cid}`,{
          method:'PUT' ,
          headers:{
            "Content-Type":"application/json",
              "Accept":'application/json'
          },
          body:JSON.stringify(newuser)
      })
    }

  return (
    <div className="cont-update">
        <div className='form-container sign-up-container'>
           
            Name : <input type="text" value={name} onChange={(e)=>{setDname(e.target.value)}}></input>
            Email : <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            Mobile : <input type="text" value={mobile} onChange={(e)=>{setMobile(e.target.value)}}></input>
            adhar : <input type="text" value={adhar} onChange={(e)=>{setAdhar(e.target.value)}}></input>
           
            <button onClick={updateUser}>Update</button>

            
        </div>
    </div>
  )
}

export default Custprofile