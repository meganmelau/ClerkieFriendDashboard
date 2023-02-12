import React from 'react';
import styled from "styled-components";
import FriendStatus from "../data/FriendsData";

// change the background color dependent on prop.sfriendStatus 
// blue for close and green for super close
const Pill = styled.button` 
    background-color: #3399FF;
    border: none;
    color: white;
    padding: 3px 7px;
    gap: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    border-radius: 21px;
`;

type FriendStatusPillProps = {
  friendStatus: typeof FriendStatus;
}
const FriendStatusPill: React.FC<FriendStatusPillProps> = ({friendStatus}) => {
  return (
    <div>
      <Pill>{friendStatus}</Pill>
    </div>
  )
}

export default FriendStatusPill;