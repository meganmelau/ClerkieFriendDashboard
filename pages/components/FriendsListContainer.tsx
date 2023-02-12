import React from 'react';
import styled from "styled-components";
import FriendRow from './FriendRow';
import { FriendType } from '../data/FriendType';

const StyledFriendsList = styled.div`
  background-color: pink;
  width: 100%;
  height: 100vh;
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