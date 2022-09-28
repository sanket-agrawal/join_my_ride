import {  Table} from 'react-bootstrap';

import { useEffect,useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles/tablestyles.css';


export default function ConfirmRide(){

    let navigate =useNavigate();
    const [cust,setCustomer]=useState({});
    const[driver,setDriver]= useState({});
    const [rid,setRid]= useState('');
    const[image,setImage]= useState(null);

    // useEffect(()=>{
       
    //    },[])
           

    //payment 
    
    const email = cust.email;
    
    const subject = "JoinMyRide : OTP for Payment";
    const random = Math.floor(100000 + Math.random() * 900000);
    const body = "Dear User , You OTP for payment is "+random;
    // const [otp, setOtp] = useState('');


    async function sendOtp (){
        await axios.post("http://localhost:8080/mail/send-mail",{
            email,
            subject,
            body
        }).then(res=>console.log(res))
    }



 
    let driver1 = JSON.parse(sessionStorage.getItem('driver')).user.uid;

    
 useEffect(()=>{

    let cust = JSON.parse(sessionStorage.getItem('user'))
    setCustomer(cust)
   
    let rid = JSON.parse(sessionStorage.getItem('rid'))
    setRid(rid);

    axios.get(`http://localhost:8080/user/${driver1}/image`)
    .then(res => {(console.log('posting data',res))
      setImage(res.data);
    })
   
},[])

   

// const dname = driver.user.name;


// const bookride = ()=>{
//     axios.post(`http://localhost:8080/customer/bookride/${cust.cid}/${rid}`)
//     .then(res=>{console.log('posting data' ,res)
    
//     .catch(err=> console.log(err))
// })

// };

let isimg;
   
 if(image==null){
  isimg = false;
 }else{
 isimg=true;
}

    return(

        <div className='card2'>
            <h1>Driver Details</h1>
        <div className='circular--portrait2'>

        {isimg ? <img  src={`data:image/png;base64,${image}`} /> :
        <img src={require('./user.jpg')}></img>}
        
        </div>
        <table cellPadding={10} className="cardtable">
            <tr>
                <td className='data'>Name-</td>
                <td className='data'> {JSON.parse(sessionStorage.getItem('driver')).user.name} </td>
            </tr>
            <tr>
                <td className='data'>Ratings-</td>
                <td className='data'> {JSON.parse(sessionStorage.getItem('driver')).ratings}  </td>
            </tr>
        </table>

       <br/>
       <br/>
        <button onClick={()=>{navigate('/customer/otp');sendOtp()}}>Book Ride</button>
         </div>

    
   )

}