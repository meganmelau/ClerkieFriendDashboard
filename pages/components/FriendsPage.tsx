import React from 'react';
import styled from "styled-components";
import { FriendType } from '../data/FriendType';
import FriendsListContainer from './FriendsListContainer';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: blue;
  flex-grow: 1;
  height: 100vh;
`;

const StyledFriendsContainer = styled.div`
  align-items: center;
`;


const StyledText = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;`;

const HeaderBox = styled.div`
  background:green;
  box-shadow: 0px 4px 4px rgba(162, 162, 162, 0.1);
`;

type FriendsPageProps = {
  data: FriendType[];
}

const FriendsPage: React.FC<FriendsPageProps> = ({data}) => {
  return (
    <StyledContainer data-test-ids="FriendsPage">
      {/* <StyledText>Friends</StyledText> */}
      <HeaderBox>
        <h2>Friends</h2>
      </HeaderBox>
      <div>Add Filter Icon</div>
      <div>Add Clear All Option</div>
      <StyledFriendsContainer>
        <FriendsListContainer friendsData={data}/>
      </StyledFriendsContainer>
    </StyledContainer>
  )
}

export default FriendsPage;