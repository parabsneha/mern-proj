import React, { useRef } from "react";
import ReactDom from "react-dom";
import Forms from "../pages/Forms";
export const Modal = ({ setShowModal }) => {

  const modalRef1 = useRef();
  const modalRef2 = useRef();
  const modalRef3 = useRef();

  const closeModal1 = (e) => {
    if (e.target === modalRef1.current) {
      setShowModal(false);
    }
  }
 
  const closeModal2 = (e) => {
    if (e.target === modalRef2.current) {
      setShowModal(false);
    }
  }
  
  const closeModal3 = (e) => {
    if (e.target === modalRef3.current) {
      setShowModal(false);
    }
  }

  return ReactDom.createPortal(
      <>
    <div className="container" ref={modalRef1} onClick={closeModal1} >
      <div className="modal">
        <h2>Employees All Details</h2>
        <button onClick={() => setShowModal(false)}>X</button>
      </div>
      </div>,

       <div className="container" ref={modalRef2} onClick={closeModal2}>
       <div className="modal">
         <h2>Tasks for this week</h2>
         <button onClick={() => setShowModal(false)}>X</button>
       </div>
       </div>,

       <div className="container" ref={modalRef3} onClick={closeModal3}>
       <div className="modal">
         <div>
        <Forms />
        
         
         </div>
         <button onClick={() => setShowModal(false)}>X</button>
       </div>
       </div>,
       </>,
 document.getElementById("portal")
    
  );

  
  

};