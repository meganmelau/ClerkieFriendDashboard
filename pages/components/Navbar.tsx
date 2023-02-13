import React from 'react';
import styled from "styled-components";
import {colors} from "./StyleVariables";
import {componentStrings} from "./strings";

const navbarStrings = componentStrings.NavBar;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.navyTheme};
  width: 250px;
  height: 100vh;
`;

const StyledNavRow = styled.div`
display: flex;
flex-direction: row;
margin: 15px;
`;

const StyledNavHeaderText = styled.div`
  color: white;
  margin-left: 11px;
  font-size: 16px;
  font-weight: 600px;
  margin: 10px;
`;

const StyledNavItemsText = styled.div`
color: white;
size: 16px;
margin-left: 10px;
`;

const StyledDiv = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
margin-left: 15px;
`;

const StyledMenu = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
margin-left: 13px;
`;


const Navbar = () => {
  return (
    <StyledContainer data-test-ids="Navbar">
      <StyledDiv>
      <StyledNavRow>
        <img src="clerkie_logo.png"/>
        <StyledNavHeaderText>{navbarStrings.clerkieHome}</StyledNavHeaderText>
      </StyledNavRow>
      <StyledNavRow>
        <img src="home_icon.png"/>
        <StyledNavItemsText>{navbarStrings.home}</StyledNavItemsText>
      </StyledNavRow>
      <StyledNavRow>
        <img src="friends_icon.png"/>
        <StyledNavItemsText>{navbarStrings.friends}</StyledNavItemsText>
      </StyledNavRow>
      </StyledDiv>
    </StyledContainer>
  )
}

export default Navbar