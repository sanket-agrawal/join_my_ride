import axios from 'axios';
import React, { Component } from 'react'

export default class UploadPhoto extends Component {


  driv;
  constructor(){
    super();
    this.state ={
        driver:{}
       
    };

}

componentDidMount(){
  this.driv =JSON.parse(sessionStorage.getItem('driver-info'))
  this.setState({driver:this.driv});

}
    onfileChangeHandler = (e) =>{
        e.preventDefault();
        this.setState({
            selectedFile : e.target.files[0]
        });
        const formData = new FormData();
        var imageFile = typeof(e.target.files[0]) !== "undefined" ? e.target.files[0] : "";
        
        formData.append("imageFile",imageFile)
        axios.post(`http://localhost:8080/user/${this.state.driver.uid}/profile-image`,formData)
        .then(res=>console.warn(res))
    };


  render() {
    return (
      <div>
        {/* <label>Upload File here </label> */}
        <input type="file" onChange={this.onfileChangeHandler} className="chooseimg" ></input>
      </div>
    )
  }
}
