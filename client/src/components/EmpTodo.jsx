import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const EmpTodo = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };


  
  return (
      
       
    <div className="container">
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
     <Link  className="btn btn-outline-light" to="/adduser" >Add User </Link></nav>
      <div className="py-4">
        <h1>My Tasks</h1>
        <table className="table table-dark ">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Position</th>
              <th scope="col">Team</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>   
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.email}</td>
                <td>{user.position}</td>
                <td>{user.team}</td>
                <td>
                   <Link key="{user.id}" class="btn btn-primary me-4" to={`/viewuser/${user.id}`}>
                    View
                  </Link> 
                   <Link
                  key="{user.id}"
                    class="btn btn-outline-primary me-4"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                   <div 
                   
                  key="{user.id}"
                    class="btn btn-danger "
                     onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </div>   
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
  );
};

export default EmpTodo