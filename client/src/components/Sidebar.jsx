import React from 'react'
import Dashboard from '../pages/Dashboard'
import styled from "styled-components";
import Badge from './Badge';
import AvatarImage from "../assets/avatarImage.jpg";
import {darkThemeColor} from "../utils";
import {RiHomeLine, RiFileCopyLine } from 'react-icons/ri';
import {FaWallet} from 'react-icons/fa';
import AdminUsers from '../pages/AdminUsers';


function Sidebar({data}) {

console.log("= ", data);
  return (
    <Container>
        <ProfileContainer>
            <Avatar src={AvatarImage} />
        <Name>{data.empFirstName}</Name>
        <Badge content={data.role} />
        </ProfileContainer>
    <LinksContainer>
     <Links>
      <Link>
        <RiHomeLine />
        <h5>Dashboard</h5>
    </Link>
    <Link>
        < RiFileCopyLine /> 
        <h5>Profile</h5>
    </Link>
    <Link to="/aduser">
        <FaWallet />
        <h5> All Users</h5>
        
    </Link>
    <Link>
        <FaWallet />
        <h5>Inbox</h5>
    </Link>

    <Link>
        
        <h5>About</h5>
    </Link>
    <ContactContainer>
          <span>Having troubles?</span>
          <a href="#">Contact us </a>
        </ContactContainer>
    </Links>
    </LinksContainer>
    </Container>
  )
}

const Container = styled.div`;
width: 25%;
  height: 100% !important;
  border-radius: 2rem;
  background-color: #091322;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Avatar = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
`;

const Name = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
  background-color: ${darkThemeColor};
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`;

const Links = styled.ul`
  list-style-type: none ;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
`;

const Link = styled.li`
  margin-left: 25%;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 3%;
  }
`;

const ContactContainer = styled.div`
  width: 60%;
  background-color: #091322;
  color: #c4c4c4;
  height: 50%;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  a {
    color: white;
    text-decoration: none;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

export default Sidebar