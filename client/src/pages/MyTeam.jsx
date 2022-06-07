
import AvatarImage from "../assets/avatarImage.jpg";
import React, { useState } from "react";
import { Modal } from "../components/Modal";

import styled from "styled-components";
import { Link } from "react-router-dom";
function MyTeam() {
  const [showModal, setShowModal] = useState(false);
const openModal1 = () => {
    setShowModal(true);
}
  return (
   
   <>
  
  {/* <div className="card-container"> */}
    <h1>My Team</h1>
    <br/>
  <div class="row">
  <div class="col-sm-4">
   <div className="card"  >
   <Avatar src={AvatarImage} />
  <div className="card-body">
    <h5 className="card-title">Namee:</h5>
    <p className="card-text">Bio:</p>
    {/* <Link to={''} className="btn btn-primary">View</Link> */}
    <div className="App">
    <button onClick={openModal1}  class="me-2">View</button>
    {showModal ? <Modal setShowModal={setShowModal} /> : null}  
    </div>       
  </div>
</div>
</div>
<br/>
<div class="col-sm-4">
<div className="card" >
<Avatar src={AvatarImage} />
  <div className="card-body">
    <h5 className="card-title">Name:</h5>
    <p className="card-text">Bio:</p>
    {/* <a href="#" className="btn btn-primary">View</a> */}
    <div className="App">
    <button onClick={openModal1}  class="me-2">View</button>
    {showModal ? <Modal setShowModal={setShowModal} /> : null}  
    </div>   
  </div>
</div>
</div>
<div class="col-sm-4">
<div className="card" >
<Avatar src={AvatarImage} />
  <div className="card-body">
    <h5 className="card-title">Name:</h5>
    <p className="card-text">Bio:</p>
    {/* <a href="#" className="btn btn-primary">View</a> */}
    <div className="App">
    <button onClick={openModal1}  class="me-2">View</button>
    {showModal ? <Modal setShowModal={setShowModal} /> : null}  
    </div> 
  </div>
</div>
</div>
</div>
<br/>
<div class="row">
  <div class="col-sm-4">
   <div className="card"  >
   <Avatar src={AvatarImage} />
  <div className="card-body">
    <h5 className="card-title">Name:</h5>
    <p className="card-text">Bio:</p>
    <a href="#" className="btn btn-primary">View</a>
  </div>
</div>
</div>
<br/>
<div class="col-sm-4">
<div className="card" >
<Avatar src={AvatarImage} />
  <div className="card-body">
    <h5 className="card-title">Name:</h5>
    <p className="card-text">Bio:</p>
    <a href="#" className="btn btn-primary">View</a>
  </div>
</div>
</div>
<div class="col-sm-4">
<div className="card" >
<Avatar src={AvatarImage} />
  <div className="card-body">
    <h5 className="card-title">Name:</h5>
    <p className="card-text">Bio:</p>
    <a href="#" className="btn btn-primary">View</a>
    <div className="App">
      {/* <h2>My Schedule</h2><br/> */}
      {/* <button onClick={openModal1} class="me-3">Day</button> */}
      {/* <button onClick={openModal2}  class="me-3">Week</button>
      <button onClick={openModal3}>month</button> */}
      {/* {showModal ? <Modal setShowModal={setShowModal} /> : null} */}
      
     
    </div>
  </div>
</div>
</div>
</div>
{/* </div> */}

</>
  )
}




const Avatar = styled.img`
  // height: 7rem;
  // border-radius: 6rem;
  // margin-top: 20%;
`

export default MyTeam