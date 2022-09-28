import React, { Component } from 'react'
import axios from 'axios';
import'./style/tablestyles.css'
;

export default class PreviousRides extends Component {

    constructor(props){
        super(props);
        this.state={
            rides:[],
            user:JSON.parse(sessionStorage.getItem('driver-info')),
            logout:()=>{sessionStorage.clear()}
            
        };
    }

    componentDidMount(){
         axios.get(`http://localhost:8080/driver/myrides/${this.state.user.did}`)
        .then(response => response.data)
        .then((data)=>{
            this.setState({rides:data});
        });
    };

    deleteRide = (rid) =>{
        console.log('inside delete')
        axios.delete(`http://localhost:8080/driver/delete-ride/${rid}`)
        .then(response=>alert(response))
        this.setState({
            rides : this.state.rides.filter(ride=> ride.rid !== rid)
            
        })
    }

    


  render() {
    return (
      <div>
        <h1>Dear {this.state.user.name}, This are your Added Rides </h1>
            <table className='styled-table'>
                <thead>
                <tr>
                    <th>Source</th>
                    <th>Destination</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Charges</th>
                    {/* <th>Action</th> */}
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        this.state.rides.map((ride)=>(
                            <tr key={this.state.user.did}>
                                    <td>{ride.source}</td>
                                    <td>{ride.dest}</td>
                                    <td>{ride.date}</td>
                                    <td>{ride.time}</td>
                                    <td>{ride.charges}</td>
                                    {/* <td><button>Update Ride</button></td> */}
                                    <td><button onClick={this.deleteRide.bind(this,ride.rid)}>Delete Ride</button></td>
                            </tr>
                            
                            ))
                            
                        
    
                    }
                </tbody>
            </table>
            <button onClick={this.state.logout}>Logout</button>
      </div>
    )
  }
}
