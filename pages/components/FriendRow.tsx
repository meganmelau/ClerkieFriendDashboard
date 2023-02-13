import React from 'react';
import styled from "styled-components";
import { FriendStatus } from '../data/FriendsData';
import { FriendType } from '../data/FriendType';
import FriendStatusPill from './FriendStatusPill';


const StyledFriendRow = styled.div`
  width: auto;
  height: 50%;
  background: #FFFFFF;
  border: 1px solid #D7D7D7;
  border-radius: 6px;
  margin: 15px;
`;

const StyledNameHeader = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;

color: #000000;`;

type FriendsRowProps = {
  friendData: FriendType;
}

const FriendRow: React.FC<FriendsRowProps> = ({friendData}) => {
  const isFriend = friendData.friendStatus;
  return (
    <StyledFriendRow>
      <div>
        <div>
          <StyledNameHeader>{friendData.firstName + ' ' + friendData.lastName }</StyledNameHeader>
          {/* TODO LOGIC FOR RENDERING PILLS WHEN STATUS IS NOT NONE */}
          {isFriend && <FriendStatusPill friendStatus={friendData.friendStatus}/>}
        </div>
        <div>
          {friendData.email}
          {/* TODO ADD MARGIN AND SPACING */}
          <img src="ellipse_icon.png"/>
          {friendData.phoneNumber }
        </div>
      </div>
    </StyledFriendRow>
  )
}

export default FriendRow;