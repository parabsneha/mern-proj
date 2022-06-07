import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Ratings from "./Ratings";
import jwt_decode from "jwt-decode";


const EditEmpTaskList = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [task, setTask] = useState({
    topic: "",
    objective: "",
    category: "",
    date: "",
    status: "",
    comments: "",
    summary: "",
  });

  const { topic, objective, category, date, status, comments, summary, } = task;
  const onInputChange = e => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  var token;
  var config;

  useEffect(() => {
    token = localStorage.getItem("token");
    console.log("token ",token);
    if(token){
      var decoded = jwt_decode(token);
      console.log("decoded data",decoded.user_id);
      // id = decoded.user_id;
    }

     config = {
      headers: { 
        'Authorization': `${token}`
      }
    };
    loadTask();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post(`http://localhost:3003/employee/getTaskById/${id}`, task);
    navigate("/dashboard");
  };

  const loadTask = async () => {
    const result = await axios.post(`http://localhost:3003/employee/getTaskById/${id}`,config);
    setTask(result.data);
  };

  return (
    <div className="container3">
      <div >
        <h2 className="text-center mb-4">Edit  Task</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div >
            <label className='col-md-2'>Topic :</label>
            <input
              type="text"
              className='col-md-2'
              placeholder="Enter Your First Name"
              name="topic"
              value={topic}
              onChange={e => onInputChange(e)}
            />

            <label className='col-md-2'>Objective :</label>
            <input
              type="text"
              className='col-md-2'
              placeholder="Enter Your Last Name"
              name="objective"
              value={objective}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div>
            <label className='col-md-2'>Category :</label>
            <input
              type="text"
              className='col-md-2'
              placeholder="Enter Your E-mail Address"
              name="category"
              value={category}
              onChange={e => onInputChange(e)}
            />
            <label className='col-md-2'>Date :</label>
            <input
              type="text"
              className="'col-md-2'"
              placeholder="Enter Position"
              name="date"
              value={date}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div>
            <label className='col-md-2'>Comments:</label>
            <input
              type="text"
              className='col-md-2'
              placeholder="Enter Your Comments"
              name="comments"
              value={comments}
              onChange={e => onInputChange(e)}
            />

            <label className='col-md-2'>Summary:</label>
            <input
              type="text"
              className='col-md-2'
              placeholder="Enter Summary"
              name="summary"
              value={summary}
              onChange={e => onInputChange(e)}
            />
          </div>

          <div>
            <label className='col-sm-1'>Status :</label>
            <select
              type="text"
              className='col-sm-3'
              placeholder="Enter Status"
              name="status"
              value={status}
              onChange={e => onInputChange(e)}

              defaultValue="Pending" >
              <option defaultValue>Pending</option>
              <option value="Done">Done</option>
              <option value="pending">pending</option>
            </select>

            <label className='col-sm-4'>
              <Ratings className='col-sm-4' /></label>
          </div>




          <br />
          <br />
          <button className="btn btn-warning btn-block">Update task</button>

        </form>
      </div>
    </div>
  );
};

export default EditEmpTaskList