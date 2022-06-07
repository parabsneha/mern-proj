// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";
// import jwt_decode from "jwt-decode";


// const ViewEmpTask = () => {
//   const [task, setTask] = useState({
//     task_id:"",
//     topic: "",
//     objective: "",
//     date: "",    
//     estimatedTime: "",
//     status: ""
//   });

//   // const [emp, setEmp] = useState([]);
//   // let id;
//   // var details;
//   var token;
//   // var task1= [];

//   useEffect(()=>{
//      token = localStorage.getItem("token");
//     console.log("token ",token);
//     if(token){
//       var decoded = jwt_decode(token);
//       console.log("decoded data",decoded.user_id);
//     }
//     viewTask();

//   },[]);
//   const { id } = useParams();
//   console.log("id = ", id);
//   // useEffect(() => {
//   //   loadTask();
//   // }, []);
//   const viewTask = async () => {
//     // const res = await axios.post(`http://localhost:3003/employee/getTaskById/${id}`);
//     // setTask(res.data);

//     var config = {
//       method: 'post',
//       url: `http://localhost:3003/employee/getTaskById/${id}`,
//       headers: { 
//         'Authorization': `${token}`
//       }
//     };

//     axios(config)
//     .then(function (response) {
//       console.log("task data ",JSON.stringify(response.data));
//       setTask(response.data);
//       //  task1 = response.data;
//       console.log("task topic", task[0].topic);
//     })
//     .catch(function (error) {
//       console.log("catch error ",error);
//     });
//   };
//   return (


//     <div className="container p-4 my-3 bg-dark text-white">
//       <h1 className="display-4">Task Id: {task[0].task_id}</h1>
//       <hr />
//       <ul className="list-group w-" >
//         <li className="list-group-item list-group-item-dark ">Topic: {task.topic}</li>
//         <li className="list-group-item active">Objective: {task.objective}</li>
//         <li className="list-group-item">Category: {task.status}</li>
//         <li className="list-group-item">date: {task.date}</li>
//         {/* <li className="list-group-item">Person responsible: {task.personResponsible}</li> */}
//         <li className="list-group-item">Est. time: {task.estimatedTime}</li>


//       </ul>
//       <br/>
//       <Link className="btn btn-primary" to="/dashboard" >
//     back to Home
//   </Link>
//     </div>

//   );
// };

// export default ViewEmpTask;


import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";


const ViewEmpTask = () => {
  const [user, setUser] = useState({
    task_id: "",
    topic: "",
    objective: "",
    date: "",
    estimatedTime: "",
    status: ""

  });
  var token;
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    token = localStorage.getItem("token");
        console.log("token ",token);
        if(token){
          var decoded = jwt_decode(token);
          console.log("decoded data",decoded.user_id);
        }
    // const res = await axios.post(`http://localhost:3003/admin/viewEmployee/${id}`);
    var config = {
            method: 'post',
            url: `http://localhost:3003/employee/getTaskById/628fc1183d75f16de89a8980`,
            headers: { 
              'Authorization': `${token}`
            }
          };
      
          axios(config)
          .then(function (response) {
            console.log("task data ",JSON.stringify(response.data[0].task_id));
            setUser(response.data);
          })
          .catch(function (error) {
            console.log("catch error ",error);
          });
    // setUser(res.data);
    console.log("user", user);
  };
  return (


    <div className="container p-4 my-3 bg-dark text-white">

      {/* <h1 className="display-4">User Id: {id}</h1> */}
      <ul className="list-group w-" >
        <li className="list-group-item list-group-item-dark ">task id: {user[0].task_id}</li>
        <li className="list-group-item active">Topic: {user[0].topic}</li>
        <li className="list-group-item">Objective: {user[0].objective}</li>
        <li className="list-group-item">Date: {user[0].date}</li>
        <li className="list-group-item">Team: {user[0].estimatedTime}</li>
        <li className="list-group-item">Contact: {user[0].status}</li>

      </ul>
      <br />
      <Link className="btn btn-primary" to="/aduser" >
        back to Home
      </Link>
    </div>

  );
};

export default ViewEmpTask;

