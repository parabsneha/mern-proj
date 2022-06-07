import LoginLink from '../components/LoginLink'
import React, { Component } from 'react'

class HrLogin extends Component {
  constructor(props) {
      super(props)

      this.state = {
         
          email:"",
         
          password:"",
         


      }
      this.handleSubmit=this.handleSubmit.bind(this)
  }

  
  
  
  emailhandler = (event) => {
      this.setState({
          email: event.target.value
      })
  }
  
  passwordhandler = (event) => {
      this.setState({
          password: event.target.value
      })
  }
  
  

  handleSubmit = (event) => {
     
      console.log(this.state);
      this.setState({
        
          email: "",
         
          password:"",
         
      })
   event.preventDefault()
      
  }

  render() {
      return (
          
         
         
<div className='container' >
<form onSubmit={this.handleSubmit} >
                  <h1>HR Login</h1>
                  <div className='container1'>
                  <div class="col-md-12">
                  
                  <label>Email :</label> <input type="text" value={this.state.email} onChange={this.emailhandler} placeholder="Email..." /></div>
                  
                  <div class="col-md-12">
                  <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /></div>
                 
                  <input type="submit" value="Login" />  </div>
              </form>
              </div>
              
      )
              } 
              
      
  
}

export default HrLogin