import React from 'react';
import styled from "styled-components";
import { FriendStatus } from '../data/FriendsData';
import { FriendType } from '../data/FriendType';
import FriendStatusPill from './FriendStatusPill';


const StyledFriendRow = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
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

const FlexDiv = styled.div`
display: flex;
margin-left: 30px;
`;

const StyledImg = styled.img`
margin: 0px 7px;
display: block;
  width: auto;
  height: auto;
  object-fit: contain;
`;

type FriendsRowProps = {
  friendData: FriendType;
}

const FriendRow: React.FC<FriendsRowProps> = ({friendData}) => {
  const isFriend = friendData.friendStatus;
  return (
    <StyledFriendRow>
        <FlexDiv>
          <StyledNameHeader>{friendData.firstName + ' ' + friendData.lastName }</StyledNameHeader>
          {/* TODO LOGIC FOR RENDERING PILLS WHEN STATUS IS NOT NONE */}
          {isFriend && <FriendStatusPill friendStatus={friendData.friendStatus}/>}
        </FlexDiv>
        <FlexDiv>
          {friendData.email}
          <StyledImg src="ellipse_icon.png"/>
          {friendData.phoneNumber }
        </FlexDiv>
    </StyledFriendRow>
  )
}

export default FriendRow;