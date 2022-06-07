import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTaskPopup = ({ modal, toggle, save }) => {
    const [topic, setTopic] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [Category, setCategory] = useState('');
    const [PersonResponsible, setPersonResponsible] = useState('');
    const [EstimatedTime, setEstimatedTime] = useState('');


    const [emp, setEmp] = useState([]);
  let id;
  var token;
  useEffect(()=>{
     token = localStorage.getItem("token");
    console.log("token ",token);
    if(token){
      var decoded = jwt_decode(token);
      console.log("decoded data",decoded.user_id);
      id = decoded.user_id;
    }

    var config = {
      method: 'post',
      url: 'http://localhost:3003/employee/mydetails',
      headers: { 
        'Authorization': `${token}`
      }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setEmp(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  },[]);

    
    const handleChange = (e) => {

        const { name, value } = e.target

        if (name === "topic") {
            setTopic(value)
        } else if (name === "description") {
            setDescription(value)
        }
        else if (name === "url") {
            setUrl(value)
        }
        else if (name === "Category") {
            setCategory(value)
        }
        else if (name === "PersonResponsible") {
            setPersonResponsible(value)
        }
        else if (name === "EstimatedTime") {
            setEstimatedTime(value)
        }
    }



    const handleSave = (e) => {
        e.preventDefault()
        let taskObj = {}
        taskObj["Name"] = topic
        taskObj["Description"] = description
        taskObj["Url"] = url
        taskObj["Category"] = Category
        taskObj["PersonResponsible"] = PersonResponsible
        taskObj["EstimatedTime"] = EstimatedTime
        
        save(taskObj)

    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>

                <div className="form-group">
                    <label>Topic</label>
                    <input type="text" className="form-control" value={topic} onChange={handleChange} name="topic" />
                </div>
                <div className="form-group">
                    <label>Objective</label>
                    <textarea rows="5" className="form-control" value={description} onChange={handleChange} name="description"></textarea>
                </div>
                <div className="form-group">
                    <label>Est. Time</label>
                    <input type="number" className="form-control" value={EstimatedTime} onChange={handleChange} name="EstimatedTime" />
                </div>
                <div className="form-group">
                    <label className='col-md-2'>Category :</label>
                    <select
                        type="text"
                        className='col-md-4'
                        placeholder="Category"
                        name="Category"
                        value={Category}
                        onChange={handleChange}

                        defaultValue="Select Position" >
                        <option defaultValue>Select Options</option>
                        <option value="Hr">Hr</option>
                        <option value="IT">IT</option>
                        <option value="General">General</option>
                    </select></div>

                <br />

                <div className="form-group">
                    <label className='col-md-2'>Person Responsible:</label>
                    <select
                        type="text"
                        className='col-md-4'
                        placeholder="Enter Your Position"
                        name="PersonResponsible"
                        value={PersonResponsible}
                        onChange={handleChange}

                        defaultValue="Select Position" >
                        <option defaultValue>Select Employee</option>
                        <option value="Employee 1">Employee 1</option>
                        <option value="Employee 2">Employee 2</option>
                        <option value="Employee 3">Employee 3</option>
                    </select></div>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}>Create</Button>{' '}
                {/* <Button color="secondary" onClick={toggle}>Cancel</Button> */}
            </ModalFooter>
        </Modal>
    );
};

export default CreateTaskPopup;