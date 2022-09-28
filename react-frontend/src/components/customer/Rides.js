// import { useEffect,useState ,useRef} from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Table} from 'react-bootstrap';
// import axios from 'axios';

// export default function Rides(){

//     let navigate = useNavigate();
//     const ref = useRef('');

// const[rides,setRides]= useState([]);
// const [rid,setRid] = useState('');

 
    
//  useEffect(()=>{
//     let rides = JSON.parse(sessionStorage.getItem('rides'))
//     setRides(rides);
   
// },[])




// //const rideId=rides.map((ride)=>(ride.rid));

//     const confirmride = ()=>{
//         axios.get(`http://localhost:8080/customer/confirmride/${ref.rid}`)
        
//         .then(res => {console.log('posting data' ,res);
//         sessionStorage.setItem('driver',JSON.stringify(res.data));
//         sessionStorage.setItem('rid',rid)
      
//         // .setRid({
//         //     rides:rides.filter(ride => ride.rid === rid)
//         // })
  
//         setTimeout(function showRides(){
//               navigate('/customer/bookride')           
//         },10)
           
//         });
    
    
//       }

//       const cur =(e)=>{
//         let r = e.current.id;

//       }
     
//     return(
//         <div>
//              <Table border={1} cellPadding={8} cellSpacing={0} className="tale1">
//             <thead>
//                 <tr>
               
//                 <th>Source</th>
//                 <th>Destination</th>
//                 <th>date</th>
//                 <th>Time</th>
//                 <th>charges</th>
//                 <th>Rating</th>
               
//                 </tr>
//             </thead>

//             <tbody>
//                     {
//                         rides.map((ride)=>(
//                             <tr key={ride.rid}>
//                                 <td>{ride.source}</td>
//                                 <td>{ride.dest}</td>
//                                 <td>{ride.date}</td>
//                                 <td>{ride.time}</td>
//                                 <td>{ride.charges}</td>
//                                 <td>{ride.rating}</td>
                                                               
//                                 <td>
                                 
//                                   <button ref={ref} onClick={()=>{cur();confirmride();}}> select {ride.rid} </button> 
//                                 </td>
                                
                                         
//                             </tr>
//                         ))
//                     }                     

//                 </tbody>
                


//         </Table>
//         </div>
//     )
// }