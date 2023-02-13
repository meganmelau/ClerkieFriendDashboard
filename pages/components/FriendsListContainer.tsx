import React from 'react';
import styled from "styled-components";
import FriendRow from './FriendRow';
import { FriendType } from '../data/FriendType';

const StyledFriendsList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: pink;
  height: 100vh;
  margin: 20px;
`;

type FriendsPageProps = {
  friendsData: FriendType[];
}

const FriendsListContainer: React.FC<FriendsPageProps> = ({friendsData}) => {
  return (
    <StyledFriendsList>
      <div>
      {friendsData.map((friend) => {
      return (
        <FriendRow friendData={friend}/>
      )})}
    </div>
      
    </StyledFriendsList>
  )
}

export default FriendsListContainer