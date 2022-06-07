import LoginLink from '../components/LoginLink'
import React from 'react'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Maincontent from '../components/MainContent';
import jwt_decode from "jwt-decode";
import {useEffect, useState} from "react";
import axios from "axios";
import { FaVectorSquare } from 'react-icons/fa';

function Dashboard() {

  const [emp, setEmp] = useState([]);
  let id;
  var details;
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


  return (
    <Container>
        
    <Sidebar data={emp} /> 
    <Maincontent data={emp}/>
    
  </Container>
)
}

const Container = styled.div`
display: flex;
height: 97vh;
background: linear-gradient(to bottom right, white 0%, #6100d4 70%);
border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1100px) {
    flex-direction: column;
  }
`;


export default Dashboard