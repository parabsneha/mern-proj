import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { Form, Button } from 'semantic-ui-react';


const AddUser = () => {
  const navigate = useNavigate();
  const [user, setUser, ] = useState({
    empFirstName: "",
    empLastName: "",
    empEmail: "",  
    empPosition: "",
    empTeam: "",
    empContactNum: "",
    empPassword: "",
    empConfirmPass: ""
    
  });

  // const { register, handleSubmit, formState: { errors } } = useForm();
  
  const { empFirstName, empLastName, empEmail,  empPosition, empTeam, empContactNum, empPassword, empConfirmPass } = user;
  const onInputChange = e => { 
    setUser({ ...user, [e.target.name]: e.target.value })
  };

  const onSubmit = async e => {
    e.preventDefault();

    if(user.empPassword === user.empConfirmPass){
     await axios.post("http://localhost:3003/admin/add-employee", user);
    console.log(user)
    navigate("/aduser");
    }
    else{
      alert("password dont match");
    }
    

  };
  return (
    <div className='container' >
      <h1>User Registration</h1><br/>
    <div className="container1">
    <div className="row gy-2 gx-3 align-items-center">
        
        <form onSubmit={e => onSubmit(e)} >
          <div>
            
          <label className='col-md-2'>First Name :</label>
            <input
            required
              type="text"
           
              className='col-md-2'
              placeholder="Enter Your First Name"
              name="empFirstName"
              value={empFirstName}
              onChange={e => onInputChange(e)}
            />
             {/* {errors.empFirstName && <span style={{ color: 'red' }}><p>Please Enter the First Name</p></span>} */}
          
          <label className='col-md-2'>Last Name :</label>
            <input
            required
              type="text"
             
              className='col-md-2'
              placeholder="Enter Your Last Name"
              name="empLastName"
              value={empLastName}
              onChange={e => onInputChange(e)}
            />
            {/* {errors.empLastName && <span style={{ color: 'red' }}><p>Please Enter the Last Name</p></span>} */}
          </div>
          <div>
          <label className='col-md-2'>Email :</label>
            <input
            required
              type="email"
              className='col-md-2'
              placeholder="Enter Your E-mail Address"
              name="empEmail"
              value={empEmail}
              onChange={e => onInputChange(e)}
            />
          
          
<label className='col-md-2'>Position :</label>
          <select
          required
              type="text"
              className='col-md-4'
              placeholder="Enter Your Position"
              name="empPosition"
              value={empPosition}
              onChange={e => onInputChange(e)}
          
             defaultValue="Select Position" >
                                <option defaultValue>Select Position</option>
                                <option value="employee">Employee</option>
                                <option value="hr">HR</option>
                                <option value="teammanager">Team Manager</option>
                            </select>
          </div>
          <div>
          <label className='col-md-2'>Team :</label>
            <input
            required
              type="text"
              className='col-md-2'
              placeholder="Enter Your Team"
              name="empTeam"
              value={empTeam}
              onChange={e => onInputChange(e)}
            />

<label className='col-md-2'>Contact Number :</label>
            <input
            required
              type="text"
              className='col-md-2'
              placeholder="Enter Your Contact Number"
              name="empContactNum"
              value={empContactNum}
              onChange={e => onInputChange(e)}
            />

          </div>
          
          <div>
          <label className='col-md-2'>Password :</label>
            <input
            required
              type="password"
              className='col-md-2'
              placeholder="Enter Password"
              name="empPassword"
              value={empPassword}
              onChange={e => onInputChange(e)}
            />

<label className='col-md-2'>Confirm Password :</label>
            <input
            required
              type="password"
              className='col-md-2'
              placeholder="Confirm Password"
              name="empConfirmPass"
              value={empConfirmPass}
              onChange={e => onInputChange(e)}
            />

          </div>

          {/* <input type="submit" /> */}
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      
    </div>
    </div>
    </div>
  );
};

export default AddUser