import React from 'react';
import styled from "styled-components";
import { FriendType } from '../data/FriendType';
import FriendsListContainer from './FriendsListContainer';

const StyledContainer = styled.div`
  display:flex;
  background-color: blue;
  width: 50%;
  height: 100vh;
`;

type FriendsPageProps = {
  data: FriendType[];
}

const FriendsPage: React.FC<FriendsPageProps> = ({data}) => {
  console.log(data);
  return (
    <StyledContainer data-test-ids="FriendsPage">
      <h1>FriendsPage</h1>
      <FriendsListContainer friendsData={data}/>
      
    </StyledContainer>
  )
}

export default FriendsPage;