import React from 'react'
import Image from 'react-bootstrap/Image'
import { MDBContainer } from 'mdb-react-ui-kit';
import {Container , Row, Col, ListGroup} from 'react-bootstrap'  
import AvatarImage from "../assets/avatarImage.jpg"
import styled from "styled-components";

function Forms() {
  return (
    <>
   
    <Container8>  
    <Containerr>
    <Avatar src={AvatarImage}/> 
<RContainer>
    
<p>I love technology, so my work is nothing but Love.</p>
    </RContainer>
    
     </Containerr>
    <br/><br/>
   < div className="row gy-3 gx-3  align-items-center">

<div ><h4>
    <label className='col-md-4'>First Name :</label> 

    <label className="col-md-4" >Last  Name :</label></h4> </div><br />
    
<div><h4>
    <label className="col-md-4" >Email   :</label> 
    
    <label className="col-md-4">Contact Number :</label></h4> </div><br />
        
  
<div><h4>
    <label className="col-md-4" >Designation   :</label> 
    <label className="col-md-4">Team :</label>
    </h4>
    </div>
    </div>

    </Container8>
    </>
  );
}
const Containerr = styled.div`;
height: 45%;
  width: 75% ;
  border-radius: 2rem;
  background-color: #091322;

  flex-direction: column;
  align-items: center;
  padding-top: 5px;
  padding-left: 5px;
  gap: 2rem;
  p {
    color: white;
    text-decoration: none;
  }
`;

const RContainer = styled.div`;
  height: 80%;
  width: 56% ;
  border-radius: 1rem;
  background-color:rgb(25, 4, 58);
  align-items: center;
  padding-top: 25px;
  padding-left: 15px;
  display: inline-block;
  p {
    color: white;
    text-decoration: none;
  }
`;


const Container8 = styled.div`;
background-color: rgb(225, 220, 238);
margin: auto;
border-style:none;
border-radius: 15px;
width: 750px;
height: 400px;
padding-left: 20px;
text-align: left;
border-radius: 15px;
box-shadow: 0 15px 6px -6px black;
`;

const Avatar = styled.img`
  height: 9rem;
  border-radius: 1rem;
  margin-top: 3%;
  margin-left: 1%;
`;


export default Forms; 