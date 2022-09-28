import axios from "axios";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./Feedbackstyle";



const Driverfeedback = () => {
const [rate, setRate] = useState(0);


const sendrate=(props)=>{
    axios.post(`http://localhost:8080/customer/rate-ride/${props.pid}`,{
       
    })
}
return (
	<Container>
        
	{[...Array(5)].map((item, index) => {
		const givenRating = index + 1;
		return (
		<label>
            
			<Radio
			type="radio"
			value={givenRating}
			onClick={() => {
				setRate(givenRating);
               
				alert(`Are you sure you want to give ${givenRating} stars ?`);
                


			}}
			/>
			<Rating>
			<FaStar
				color={
				givenRating < rate || givenRating === rate
					? "rgb(255, 215, 0)"
					: "rgb(192,192,192)"
				}
			/>
			</Rating>
		</label>
		);
	})
    }
  
	</Container>
);
};

export default Driverfeedback;
