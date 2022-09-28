import './styles/loading.css'
import { HashLoader } from 'react-spinners'
import { useEffect } from 'react';
import CustDash from './CustDash';
import { useNavigate } from 'react-router-dom';


export default function BookRide(){

  let navigate = useNavigate()

        useEffect(() => {
            const timer = setTimeout(() => {  
             
              navigate('/status')
            }, 3000);
            return () => clearTimeout(timer);
          }, []);
    
        
    return(

        <div className='loading' >
        
        <HashLoader color="#0096FF" />
        <h4>Making payment...</h4>
        
    </div>
           
           
       
    )
}
