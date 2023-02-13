import React from "react";
import styled from "styled-components";
import { FriendStatus } from "../data/FriendType";
import { colors } from "./StyleVariables";

/**
 *change the background color dependent on props.friendStatus
  blue for close and green for super closeblueLight: "#DFEFFF",
  blueFont: "#3399FF",
  greenLight: "#DCFFE6",
  greenFont: "#19B444",
  Not sure why ${colors.lightGreen is working}
 */
const Pill = styled.button`
  background-color: ${(props) =>
    props.children === FriendStatus.SuperClose ? "#DCFFE6" : "#DFEFFF"};
  color: ${(props) =>
    props.children === FriendStatus.SuperClose ? "#19B444" : "#3399FF"};
  border: none;
  padding: 3px 8px;
  gap: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 10px 12px;
  border-radius: 21px;
`;

type FriendStatusPillProps = {
  friendStatus: FriendStatus;
};
const FriendStatusPill: React.FC<FriendStatusPillProps> = ({
  friendStatus,
}) => {
  return (
    <div>
      <Pill>{friendStatus}</Pill>
    </div>
  );
};

export default FriendStatusPill;
