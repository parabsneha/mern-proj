import React from 'react'
import { Link } from "react-router-dom";

function Buddy() {
  return (
    <div className='container7'>
        <h3>Assign supervisor :</h3>
        <br/>
        <div>
        <label className='col-md-2'>Employee :</label>
          <select
              type="text"
              className='col-md-4'
              placeholder="Select Employee"
            //   name="empPosition"
            //   value={empPosition}
            //   onChange={e => onInputChange(e)}
          
             defaultValue="Select Position" >
                                <option defaultValue>Select Employee</option>
                                <option value="employee">Employee</option>
                                <option value="hr">HR</option>
                                <option value="teammanager">Team Manager</option>
                            </select>

                            <label className='col-md-2'>Supervisor :</label>
          <select
              type="text"
              className='col-md-4'
              placeholder="Select Supervisor"
            //   name="empPosition"
            //   value={empPosition}
            //   onChange={e => onInputChange(e)}
          
             defaultValue="Select Supervisor" >
                                <option defaultValue>Select Supervisor</option>
                                <option value="employee">Employee</option>
                                <option value="hr">HR</option>
                                <option value="teammanager">Team Manager</option>
                            </select>





                            </div>
                            <br/>
                            <Link  class="btn btn-primary float-end me-4" to={``}>
                    Assign
                  </Link>
        </div>
  )
}

export default Buddy