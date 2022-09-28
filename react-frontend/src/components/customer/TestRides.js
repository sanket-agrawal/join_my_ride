import React,{Component } from "react";
import axios from "axios";
import { Table} from "react-bootstrap";
import { Link } from 'react-router-dom';
import './styles/tablestyles.css';





export default class TestRides extends Component{
   
     rides;
    constructor(props){
            super(props);
            this.state ={
                ridess:[],
                ride:{}
                
                // rid :''
            };
        
    }

    componentDidMount(){
        this.rides =JSON.parse(sessionStorage.getItem('rides'))
        this.setState({ridess:this.rides});
        // const rides = ridess ? sessionStorage.getItem('rides') : '';
        // this.setState({ rides, ridess });
    };
   
  
        // let rides = JSON.parse( sessionStorage.getItem('rides'));
    

   
    confirmride=(rid)=>{
       
    axios.get(`http://localhost:8080/customer/confirmride/${rid}`)
        
        .then(res => {console.log('posting data' ,res);
        this.ride1(rid)
        sessionStorage.setItem('driver',JSON.stringify(res.data));
        sessionStorage.setItem('rid',rid)
      
        this.setState({
            ridess:this.ridess.filter(ride => ride.rid === rid)
        })
  
        setTimeout(function showRides(){
        //    <a href="/customer/bookride"/>
       

             
        },10)
           
        });
    }


    ride1=(rid)=>{
        axios.post(`http://localhost:8080/customer/return/${rid}`)
        .then(res=>{console.log('posting data' ,res);
        sessionStorage.setItem("ride",JSON.stringify(res.data))
        this.setState({
            ridess:this.ridess.filter(ride => ride.rid === rid)
        
    })

    })
}
    render(){
        return(


            <div>
                 <Table border={1} cellPadding={8} cellSpacing={0} className="styled-table" > 
            <thead>
                <tr>
               
                <th>Source</th>
                <th>Destination</th>
                <th>date</th>
                <th>Time</th>
                <th>charges</th>
                <th>Rating</th>
               
                </tr>
            </thead>

            <tbody>
                    {
                        this.state.ridess.map((ride)=>(
                            <tr key={ride.rid}>
                                <td>{ride.source}</td>
                                <td>{ride.dest}</td>
                                <td>{ride.date}</td>
                                <td>{ride.time}</td>
                                <td>{ride.charges}</td>
                                <td>{ride.rating}</td>
                                                               
                                <td>
                                    
                                 <Link to ="/extra">
                                  <button onClick={this.confirmride.bind(this,ride.rid)}> select {ride.rid} </button> </Link>
                                </td>
                               
                                         
                            </tr>
                        ))
                    }                     

                </tbody>
                


        </Table>
            </div>
        )
    }
}
