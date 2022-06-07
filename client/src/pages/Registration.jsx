import React from 'react';
import { Link } from 'react-router-dom'


class Registration extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            empFirstName: "",
            empLastName: "",
            empEmail: "",
            empPassword: "",
            empConfirmPass: "",
            empContactNum: "",
            empPosition: "",
            empTeam: "",
            gender: "",


        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    render() {
        return <div className='container' >

            <form onSubmit={this.handleSubmit} >
                <h1>User Registration</h1><br/>
                
<div className='container1'>
                    <div className="row gy-2 gx-3 align-items-center">

                        <div >
                            <label className='col-md-2'>First Name :</label> <input className='col-md-2'  required type="text" value={this.state.empFirstName} onChange={this.firsthandler} placeholder="FirstName..." />
                        
                            <label className="col-md-2" >Last  Name :</label> <input className="col-md-2" required type="text" value={this.state.empLastName} onChange={this.lasthandler} placeholder="LastName..." /></div><br />
                            
                        <div>
                            <label className="col-md-2" >Email   :</label> <input className="col-md-2" required  type="text" value={this.state.empEmail} onChange={this.emailhandler} placeholder="Email..." />
                            
                            <label className="col-md-2">Contact Number :</label> <input className="col-md-2" required  type="text" value={this.state.empContactNum} onChange={this.contacthandler} placeholder="Contact Number..." /></div><br /><br />
                        <div>
                            <label className="col-md-2">Password :</label> <input className="col-md-2" type="password" value={this.state.empPassword} onChange={this.passwordhandler} placeholder="Password..." />
                        
                            <label className="col-md-2">Confirm Password :</label> <input className="col-md-2" type="password" value={this.state.empConfirmPass} onChange={this.confirmPasswordhandler} placeholder="Password..." /></div><br />
                        
                        <div  >
                            <label className="col-md-2">Position :</label>
                            <select onChange={this.genderhandler} defaultValue="Select Position" input className="col-md-3">
                                <option defaultValue>Select Position</option>
                                <option value="male">Admin</option>
                                <option value="female">HR</option>
                            </select>
                        
                            <label className="col-md-2">Team  :</label> <input className="col-md-2" required  type="text" value={this.state.empTeam} onChange={this.teamhandler} placeholder="Team..." /></div><br/>
                        <div className='col-md-6'>
                            <label className="col-md-4" >Gender :</label><select onChange={this.genderhandler} defaultValue="Select Gender" input className="col-md-6">
                                <option defaultValue>Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select></div>



<div>
                        
                            <input className="col-md-2" type="submit" value="Submit" />

                
                <Link to="/login"><input type="submit" value="Login" >
                </input></Link>
                </div></div></div>

            </form>

        </div>

    }


    firsthandler = (event) => {
        this.setState({
            empFirstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            empLastName: event.target.value
        })
    }
    emailhandler = (event) => {
        this.setState({
            empEmail: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            empPassword: event.target.value
        })
    }
    confirmPasswordhandler = (event) => {
        this.setState({
            empConfirmPass: event.target.value
        })
    }
    contacthandler = (event) => {
        this.setState({
            empContactNum: event.target.value
        })
    }

    positionhandler = (event) => {
        this.setState({
            empPosition: event.target.value
        })
    }
    teamhandler = (event) => {
        this.setState({
            empTeam: event.target.value
        })
    }

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleSubmit = (event) => {


        alert(`${this.state.empFirstName} ${this.state.empLastName}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            empFirstName: "",
            empLastName: "",
            empEmail: "",
            empPassword: "",
            empConfirmPass: "",
            empContactNum: "",
            empPosition: "",
            empTeam: "",
            gender: "",
        })
        event.preventDefault()

    }
}

export default Registration