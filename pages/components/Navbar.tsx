import React from 'react';
import styled from "styled-components";

const StyledContainer = styled.div`
  display:flex;
  background-color: #091928;
  width: 50%;
  height: 100vh;
`;

const Navbar = () => {
  return (
    <StyledContainer data-test-ids="Navbar">
      <h1>Navbar</h1>
    </StyledContainer>
  )
}

export default Navbar