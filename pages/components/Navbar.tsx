import React from 'react';
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #091928;
  width: 15%;
  height: 100vh;
`;

const StyledNavRow = styled.div`
display: flex;
flex-direction: row;
`;

const Navbar = () => {
  return (
    <StyledContainer data-test-ids="Navbar">
      <StyledNavRow>
        <img src="clerkie_logo.png"/>
        <h4>Clerkie Challenge</h4>
      </StyledNavRow>
      <StyledNavRow>
        <img src="home_icon.png"/>
        <div>Home</div>
      </StyledNavRow>
      <StyledNavRow>
        <img src="friends_icon.png"/>
        <div>Friends</div>
      </StyledNavRow>
    </StyledContainer>
  )
}

export default Navbar