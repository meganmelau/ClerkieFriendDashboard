import React from 'react';
import styled from "styled-components";
import { FriendType } from '../data/FriendType';
import FriendStatusPill from './FriendStatusPill';

const StyledFriendRow = styled.div`
  width: auto;
  height: 50%;
  background: #FFFFFF;
  border: 1px solid #D7D7D7;
  border-radius: 6px;
`;

type FriendsRowProps = {
  friendData: FriendType;
}

const FriendRow: React.FC<FriendsRowProps> = ({friendData}) => {
  return (
    <StyledFriendRow>
      <div>
          <span>
            {friendData.firstName + ' ' + friendData.lastName }
            <FriendStatusPill friendStatus={friendData.friendStatus}/>
            {friendData.email+ ' ' + friendData.phoneNumber }
          </span>
      </div>
     
    </StyledFriendRow>
  )
}

export default FriendRow;