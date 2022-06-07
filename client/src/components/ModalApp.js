import React, { useState } from "react";
import { Modal } from "./Modal";

export default function App() {
  const [showModal, setShowModal] = useState(false);
const openModal1 = () => {
    setShowModal(true);
  };
  // const openModal2 = () => {
  //   setShowModal(true);
  // };
  // const openModal3 = () => {
  //   setShowModal(true);
  // };
  
 
  return (
  
    <div className="App">
      <h2>My Schedule</h2><br/>
      <button onClick={openModal1} class="me-2">Day</button>
      {/* <button onClick={openModal2}  class="me-3">Week</button>
      <button onClick={openModal3}>month</button> */}
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
      
     
    </div>
    
  );
}