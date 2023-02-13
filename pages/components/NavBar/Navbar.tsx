import React from "react";
import styled from "styled-components";
import { colors } from "../StyleVariables";
import { componentStrings } from "../strings";

const navbarStrings = componentStrings.NavBar;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.navyTheme};
  width: 250px;
  height: 100vh;
`;

const NavRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 15px;
  width: 220px;
  height: 40px;
`;
const StyledNavRow = styled(NavRow)`
  &:hover {
    border-radius: 6px;
    background: ${colors.lightGrey};
  }
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 15px;
`;

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

const Navbar = () => {
  return (
    <StyledContainer data-test-ids="Navbar">
      <StyledDiv>
        <NavRow>
          <img src="clerkie_logo.png" />
          <StyledNavHeaderText>{navbarStrings.clerkieHome}</StyledNavHeaderText>
        </NavRow>
        <StyledMenu>
          <StyledNavRow>
            <img src="home_icon.png" />
            <StyledNavItemsText>{navbarStrings.home}</StyledNavItemsText>
          </StyledNavRow>
          <StyledNavRow>
            <img src="friends_icon.png" />
            <StyledNavItemsText>{navbarStrings.friends}</StyledNavItemsText>
          </StyledNavRow>
        </StyledMenu>
      </StyledDiv>
    </StyledContainer>
  );
};

export default Navbar;
