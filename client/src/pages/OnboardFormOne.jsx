import React, { useState } from 'react'
import {Container , Row, Col, ListGroup, Button} from 'react-bootstrap'
import styled from "styled-components";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Form from 'react-bootstrap/Form';

function OnboardFormOne() {



  
  return (
    <>
    <div className='container'>
     <Form>
       <h2>Form-I  Basic details</h2>
       <br/>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="Fisrt Name" placeholder="Enter First Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="Last Name" placeholder="Enter Last Name" />
    </Form.Group>
  </Row>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="Email" placeholder="Enter Email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Contact</Form.Label>
      <Form.Control type="Contact" placeholder="Enter Contact Number" />
    </Form.Group>
  </Row>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Father's Name</Form.Label>
      <Form.Control placeholder="Enter Father's Name"/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Religion</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>Hindu</option>
        <option>Catholic</option>
        <option>Muslim</option>
        <option>Others</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Nationality</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Date of Birth</Form.Label>
      <Form.Control placeholder="Enter DOB"/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Marital Status</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>Single</option>
        <option>Married</option>
        <option>Divorced</option>
        
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Address Type</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>Home</option>
        <option>Business</option>
        
        
      </Form.Select>
    </Form.Group>
  </Row>


  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>Goa</option>
        <option>Maharastra</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Landmark</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
    </>
  )
}







export default OnboardFormOne