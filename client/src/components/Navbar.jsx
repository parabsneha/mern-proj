import React, { useEffect } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

function Navbar({data}) {

  return (
    <NavbarContainer>
      <Text>
        Welcome,
        <span>
        {data.empFirstName}
        </span>
      </Text>
      
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

const Text = styled.h2`
  span {
    font-weight: 500;
    color: #484258;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 1rem;
  }
`;

export default Navbar;