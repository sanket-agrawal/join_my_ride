import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom"

export default function Protected (props){
    const navigate = useNavigate();
    let cmp = props.cmp;
    useEffect(()=>{
        if(!sessionStorage.getItem('user')){
            navigate('./customer/login')
        }
    },[])
}