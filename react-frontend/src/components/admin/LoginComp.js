import React,{useState,useEffect} from 'react'
import { Form,Button } from 'react-bootstrap'
import './styles.css';
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom';

function LoginComp() {


  const [email,setEmail]=useState('');
  const [pwd,setPwd]=useState('');
  const navigate= useNavigate();

  useEffect(()=>{
    let admin =sessionStorage.getItem('admin-info')
   
      if(admin !== null){
        navigate("/admin/controller")
      }
      else{
        
      }
      
   
  },[])

  const [verified,setVerified]=useState(false); 
   function onChange(value){
        console.log("Captcha value:",value);
        setVerified(true);
    }

    async function login(e){
     e.preventDefault();
      let item={email,pwd};
      let result = await fetch("http://localhost:8080/admin/login",{
          method:'POST' ,
          headers:{
            "Content-Type":"application/json",
              "Accept":'application/json'
          },
          body:JSON.stringify(item)
      });
      result = await result.json();
      sessionStorage.setItem("admin-info",JSON.stringify(result))
      navigate("/admin/controller")
    }

  return (
    <div className='cont'>
       <div className='form-container sign-in-container'>
        <form>
      
        
        <input
        type="email" 
        placeholder="Enter email" 
        onChange={(e)=>setEmail(e.target.value)}
        />
        
    
      
        <input
        type="password" 
        placeholder="Password" 
        onChange={(e)=>setPwd(e.target.value)}
        />
      
            {/* <ReCAPTCHA
                sitekey='6Lf__OchAAAAAIEVTaKSDlhhok3x0Hr6hmdqkco-'
                onChange={onChange}
                id='captcha'
                /> */}
          

      <button variant="primary" type="submit" id='buttonform' onClick={login}>
        Login
      </button>
    </form>
    
    </div>
    <div class="overlay-container">
		<div class="overlay">
		
			<div class="overlay-panel overlay-right">
				<h1>Hello</h1>
				<p>Enter your personal details and start journey with us</p>
				{/* <button class="ghost" id="signUp" onClick={()=>{navigate('/customer/signup')}}>Sign Up</button> */}
			</div>
		</div>
	</div>
    </div>
  )
}

export default LoginComp
