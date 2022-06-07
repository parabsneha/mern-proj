import LoginLink from '../components/LoginLink'
import React, { Component } from 'react'
import axios from "axios";
import { Link , useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    let [data, setData] = useState({ empEmail: "", empPassword: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // const handleChange = ({ currentTarget: input }) => {
    // 	setData({ ...data, [input.name]: input.value });
     // };

    const emailhandler = (event) => {
        setData({
            ...data,
            empEmail: event.target.value
        })
        // console.log(data);
    }

    const passwordhandler = (event) => {
        setData({
            ...data,
            empPassword: event.target.value
        })
    }
    let details = null;

    const handleSubmit = async (e) => {
        
        e.preventDefault();
         try {
             data = await axios.post('http://localhost:3003/login', data);
             console.log("token = ",data.data.token);
             await localStorage.setItem("token", data.data.token);
            //  await console.log(data['data']);
            //  console.log("status", data.status);
             if(data.status === 200){
                navigate('/dashboard');
                // console.log("logged in ");
             }
            //  window.location = "/login";
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
        e.preventDefault();
    };

    return (
        <div className='container' >
            <form onSubmit={handleSubmit} >
                <h1>Employee Login</h1>
                <div className='container1'>
                    <div class="col-md-12">

                        <label>Email :</label> <input type="email" value={data.empEmail} onChange={emailhandler} placeholder="Email..." /></div>

                    <div class="col-md-12">
                        <label>Password :</label> <input type="password" value={data.empPassword} onChange={passwordhandler} placeholder="Password..." /></div>

                    <input type="submit" value="Login" />  </div>
            </form>
        </div>
    );
};

// class LoginForm extends Component {


    

//     constructor(props) {
//         super(props)

//         this.state = {

//             email: "",

//             password: "",

//         }
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }

    
//     emailhandler = (event) => {
//         this.setState({
//             email: event.target.value
//         })
//     }

//     passwordhandler = (event) => {
//         this.setState({
//             password: event.target.value
//         })
//     }
//     handleSubmit = (event) => {

//         console.log(this.state);
//         this.setState({

//             email: "",

//             password: "",

//         })
//         event.preventDefault()
//     }



//     render() {
//         return (

//             <div className='container' >
//                 <form onSubmit={this.handleSubmit} >
//                     <h1>Employee Login</h1>
//                     <div className='container1'>
//                         <div class="col-md-12">

//                             <label>Email :</label> <input type="text" value={this.state.email} onChange={this.emailhandler} placeholder="Email..." /></div>

//                         <div class="col-md-12">
//                             <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /></div>

//                         <input type="submit" value="Login" />  </div>
//                 </form>
//             </div>

//         )
//     }



// }

export default Login