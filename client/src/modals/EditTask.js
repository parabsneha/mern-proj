import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



const EditTaskPopup = ({modal, toggle, updateTask, taskObj}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [assign, setAssign] = useState('');

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else if(name === "description"){
            setDescription(value)
        }
        else if(name === "url"){
            setUrl(value)
        }
        else if(name === "assign"){
            setAssign(value)
        }
    }

    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
        setUrl(taskObj.Url)
        setAssign(taskObj.Assign)
    },[])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Description'] = description
        tempObj['Url'] = url
        tempObj['Assign'] = assign
        updateTask(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Task Name</label>
                        <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>
                    <div className = "form-group">
                        <label>URL</label>
                        <textarea rows = "2" className = "form-control" value = {url} onChange = {handleChange} name = "url"></textarea>
                    </div>

                    
                    <div className = "form-group">
                    <label className='col-md-2'>Assign to:</label>
          <select
              type="text"
              className='col-md-4'
              placeholder="Enter Your Position"
              name="assign"
              value={assign}
              onChange = {handleChange}
          
             defaultValue="Select Position" >
                                <option defaultValue>Select Employee</option>
                                <option value="Employee 1">Employee 1</option>
                                <option value="Employee 2">Employee 2</option>
                                <option value="Employee 3">Employee 3</option>
                            </select>
                    </div>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditTaskPopup;