import { useEffect} from "react";
import { useState } from "react";
import axios from "axios";

export default function DoneD(){

    const [cust,setCustomer]=useState({});
    const [ride,setRide]=useState({});

  
  
    useEffect(()=>{
        let cust = JSON.parse(sessionStorage.getItem('user'))
        setCustomer(cust)
    
    
        let ride = JSON.parse(sessionStorage.getItem('ride'))
        setRide(ride)

       
    },[])

    const s =ride.source
    let d =ride.dest
    let n =cust.name
    let m =cust.mobile
    console.log(ride.dest)
    console.log(cust.name)
    console.log(cust.mobile)


    const subject = "JoinMyRide : Ride Booked";
    const random = Math.floor(100000 + Math.random() * 900000);
    const body  = `Dear User , Your ride from Source : ${s} to destination : ${d} is booked \n\n
    OTP for ride is ${random} \n\n Customer details :\n Name : ${n} \n Mobile Number : ${m}`

    let email = JSON.parse(sessionStorage.getItem('driver')).user.email;

    useEffect(() => {
        const timer = setTimeout(() => {  
        axios.post(`http://localhost:8080/mail/send-mail`,{
            email,
            subject,
            body
        }).then(res=>console.log(res))
    }, 1000);
    return () => clearTimeout(timer);
    },[])

    return(
        <div></div>
    )
}
