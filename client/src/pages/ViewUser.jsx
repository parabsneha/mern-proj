import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewUser = () => {
  const [user, setUser] = useState({
    empFirstName: "",
    empLastName: "",
    empEmail: "",
    empPosition: "",
    empTeam: "",
    empContactNum: ""
    
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.post(`http://localhost:3003/admin/viewEmployee/${id}`);
    setUser(res.data);
    console.log("user",user);
  };
  return (
      
   
    <div className="container p-4 my-3 bg-dark text-white">
      
      {/* <h1 className="display-4">User Id: {id}</h1> */}
      {/* <hr /> */}
      <ul className="list-group w-" >
        <li className="list-group-item list-group-item-dark ">First Name: {user.empFirstName}</li>
        <li className="list-group-item active">Last Name: {user.empLastName}</li>
        <li className="list-group-item">Email: {user.empEmail}</li>
        <li className="list-group-item">position: {user.empPosition}</li>
        <li className="list-group-item">Team: {user.empTeam}</li>
        <li className="list-group-item">Contact: {user.empContactNum}</li>
       
      </ul>
      <br/>
      <Link className="btn btn-primary" to="/aduser" >
    back to Home
  </Link>
    </div>
    
  );
};

export default ViewUser;