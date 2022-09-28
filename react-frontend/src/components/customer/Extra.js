
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Extra() {

    let navigate= useNavigate();
    useEffect(()=>{
        const timer = setTimeout(() => {  
             
            navigate('/customer/bookride')
          }, 1000);
          return () => clearTimeout(timer);

    },[])
   
        return (
            <div>
                
            </div>
        );

}

export default Extra;