import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class AdminUsers extends Component {
  constructor() {
    super();
    this.state = {
      employees: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3003/admin/employees', {
      method:"POST",
    })
      .then(res => res.json())
      .then(employees => this.setState({ employees }, () => console.log('employee fetched..', employees)));


      // fetch('http://localhost:3003/admin/employees', { 
      //   method: 'post', 
      //   headers: new Headers({
      //     'Authorization': 'Basic '+btoa('username:password'), 
      //     'Content-Type': 'application/x-www-form-urlencoded'
      //   }), 
      //   body: 'A=1&B=2'
      // });
  };


  deleteUser = async (id) => {
    await axios.post(`http://localhost:3003/admin/delete-employee/${id}`);
    // loadUsers();
  };

  render() {
    return (

      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <Link className="btn btn-outline-light" to="/adduser" >Add User </Link></nav>
        <div className="py-4">
          <h1>All Users</h1>
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
              {this.state.employees.map((employee, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{employee.empFirstName}</td>
                  <td>{employee.empLastName}</td>
                  <td>{employee.empEmail}</td>
                  <td>{employee.empPosition}</td>
                  <td>{employee.empTeam}</td>
                  <td>
                    <Link key="{employee._id}" class="btn btn-primary me-4" to={`/viewuser/${employee._id}`}>
                      View
                    </Link>
                    <Link
                      key="{employee._id}"
                      class="btn btn-outline-primary me-4"
                      to={`/edituser/${employee._id}`}
                    >
                      Edit
                    </Link>
                    <div

                      // key="{employee.id}"
                      // class="btn btn-danger "
                      // onClick={() => deleteUser(employee._id)}
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
  }

}






// const AdminUsers = () => {
//   const [users, setUser] = useState([]);
//   // const [employees, setUser] = useState([]);

//   useEffect(() => {
//     loadUsers();
//   }, []);

//   const loadUsers = async () => {
//     const result = await axios.get("http://localhost:3003/admin/employees");
//     var axios = require('axios');

// // var config = {
// //   method: 'post',
// //   url: 'http://3.110.31.31:3003/admin/employees',
// //   headers: { 
// //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjI4MGNlZmJiNmZiMWVmNzJmMzUxYTI1Iiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhdnl1a3RyYW5lQGdtYWlsLmNvbSIsImlhdCI6MTY1MzU0OTQ2MSwiZXhwIjoxNjU0MTU0MjYxfQ.5e2A3HRHI89YX5Mf2NXGerc1f-UlwRl-s7iWIQOG5a4'
// //   }
// // };

// // axios(config)
// // .then(function (response) {
// //   // console.log(JSON.stringify(response.data));
// //   console.log(response.data)
// //   setUser(response.data);
// // })
// // .catch(function (error) {
// //   console.log(error);
// // });

//   // };

//   const deleteUser = async id => {
//     await axios.post(`http://localhost:3003/admin/delete-employee/${id}`);
//     loadUsers();
//   };

//   // return (    
//   //   <div className="container" >

//   //      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//   //    <Link  className="btn btn-outline-light" to="/adduser" >Add User </Link></nav>
//   //     <div className="py-4">
//   //       <h1>All Users</h1>
//   //       <table className="table table-dark ">
//   //         <thead className="thead-dark">
//   //           <tr>
//   //             <th scope="col">#</th>
//   //             <th scope="col">First Name</th>
//   //             <th scope="col">Last Name</th>
//   //             <th scope="col">Email</th>
//   //             <th scope="col">Position</th>
//   //             <th scope="col">Team</th>
//   //             <th>Action</th>
//   //           </tr>
//   //         </thead>
//   //         <tbody>   
//   //           {this.state.users.map((user, index) => (
//   //             <tr>
//   //               <th scope="row">{index + 1}</th>
//   //               <td>{user.empFirstName}</td>
//   //               <td>{user.empLastName}</td>
//   //               <td>{user.empEmail}</td>
//   //               <td>{user.empPosition}</td>
//   //               <td>{user.empTeam}</td>
//   //               <td>
//   //                  <Link key="{user._id}" class="btn btn-primary me-4" to={`/viewuser/${user._id}`}>
//   //                   View
//   //                 </Link> 
//   //                  <Link
//   //                 key="{user._id}"
//   //                   class="btn btn-outline-primary me-4"
//   //                   to={`/edituser/${user._id}`}
//   //                 >
//   //                   Edit
//   //                 </Link>
//   //                  <div 

//   //                 key="{user.id}"
//   //                   class="btn btn-danger "
//   //                    onClick={() => deleteUser(user._id)}
//   //                 >
//   //                   Delete
//   //                 </div>   
//   //               </td>
//   //             </tr>
//   //           ))}
//   //         </tbody>
//   //       </table>
//   //     </div>
//   //   </div>

//   // );
// }
// }
export default AdminUsers