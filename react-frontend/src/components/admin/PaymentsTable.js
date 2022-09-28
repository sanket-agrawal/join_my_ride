import React, { Component } from 'react'
import { Card,Table } from 'react-bootstrap'
import axios from 'axios'

export default class PaymentsTable extends Component {
    constructor(props){
        super(props);
        this.state={
            payments :[]
        };
    }

    componentDidMount(){
        axios.get("http://localhost:8080/admin/paymentstable")
        .then(response=>response.data)
        .then((data)=>{
            this.setState({payments:data});
        });
    };

  render() {
    return (
      
      <Card>
        <Card.Header>Payments Table</Card.Header>
        <Card.Body>
            <Table>
            <thead>
                <tr>
                    <th>Payment Id</th>
                    <th>Date</th>
                    <th>Mode</th>
                    <th>Time</th>
                    <th>Customer Id</th>
                    <th>Ride Id</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.payments.map((pay)=>(
                        <tr key={pay.pid}>
                            <td>{pay.pid}</td>
                            <td>{pay.date}</td>                           
                            <td>{pay.mode}</td> 
                            <td>{pay.time}</td> 
                            <td>{pay.customer.cid}</td> 
                            <td>{pay.rides.rid}</td>
                            
                        </tr>
                    ))
                }
            </tbody>
            </Table>
        </Card.Body>
    </Card>
      
    )
  }
}
