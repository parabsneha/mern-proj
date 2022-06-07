import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    empFirstName: "",
    empLastName: "",
    empEmail: "",
    empPosition: "",
    empTeam: "",
    empContactNum: "",
    empPassword: "",
    empConfirmPass: ""
  });

  const { empFirstName, empLastName, empEmail, empPosition, empTeam,empContactNum, empPassword, empConfirmPass } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post(`http://localhost:3003/admin/update-employee/${id}`, user);
    navigate("/aduser");
  };

  const loadUser = async () => {
    const result = await axios.post(`http://localhost:3003/admin/viewEmployee/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container3">
      <div >
        <h2 className="text-center mb-4">Edit  User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div >
          <label className='col-md-2'>First Name :</label>
            <input
              type="text"
              className='col-md-2'
              placeholder="Enter Your First Name"
              name="empFirstName"
              value={empFirstName}
              onChange={e => onInputChange(e)}
            />
          
          <label className='col-md-2'>Last Name :</label>
            <input
              type="text"
              className='col-md-2'
              placeholder="Enter Your Last Name"
              name="empLastName"
              value={empLastName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div>
          <label className='col-md-2'>Email :</label>
            <input
              type="text"
              className='col-md-2'
              placeholder="Enter Your E-mail Address"
              name="empEmail"
              value={empEmail}
              onChange={e => onInputChange(e)}
            />
            <label className='col-md-2'>Position :</label>
            <input
              type="text"
              className="'col-md-2'"
              placeholder="Enter Position"
              name="empPosition"
              value={empPosition}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div>
          <label className='col-md-2'>Team :</label>
            <input
              type="text"
              className='col-md-2'
              placeholder="Enter Your Team Name"
              name="empTeam"
              value={empTeam}
              onChange={e => onInputChange(e)}
            />
         <label className='col-md-2'>Contact Number :</label>
            <input
              type="text"
              className='col-md-2'
              placeholder="Enter Your Contact"
              name="empContactNum"
              value={empContactNum}
              onChange={e => onInputChange(e)}
            />
          </div>

          {/* <div> */}
          {/* <label className='col-md-2'>Password :</label>
            <input
              type="text"
              className='col-md-2'
              placeholder="Enter Password"
              name="empPassword"
              value={empPassword}
              onChange={e => onInputChange(e)}
            />
          <label className='col-md-2'>Confirm Password :</label>
            <input
              type="text"
              className='col-md-2'
              placeholder="Confirm Password"
              name="empConfirmPass"
              value={empConfirmPass}
              onChange={e => onInputChange(e)}
            />
          </div> */}
            <br/>
            <br/>
          <button className="btn btn-warning btn-block">Update User</button>
          
        </form>
      </div>
    </div>
  );
};

export default EditUser;