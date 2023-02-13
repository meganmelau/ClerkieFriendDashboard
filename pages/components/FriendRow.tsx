import React from "react";
import styled from "styled-components";
import { FriendStatus } from "../data/FriendType";
import { FriendType } from "../data/FriendType";
import FriendStatusPill from "./FriendStatusPill";
import { colors } from "./StyleVariables";

const StyledFriendRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1050px;
  height: 114px;
  background: white;
  border: 1px solid ${colors.mediumGrey};
  border-radius: 6px;
  margin: 15px;
`;

const StyledNameHeader = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: black;
`;

const FlexDiv = styled.div`
  display: flex;
  margin-left: 30px;
`;

const SubHeadingDiv = styled(FlexDiv)`
  color: ${colors.lightGrey};
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
};

// This assumes the data is US format 10 digits and we are adding paranthesis and a hyphen
const phoneNumberFormatting = (phoneNum: number): string => {
  var cleaned = ("" + phoneNum).replace(/\D/g, "");
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }
  return null;
};

const FriendRow: React.FC<FriendsRowProps> = ({ friendData }) => {
  const isFriend = friendData.friendStatus != FriendStatus.None;

  return (
    <StyledFriendRow>
      <FlexDiv>
        <StyledNameHeader>
          {friendData.firstName + " " + friendData.lastName}
        </StyledNameHeader>
        {isFriend && (
          <FriendStatusPill friendStatus={friendData.friendStatus} />
        )}
      </FlexDiv>
      <SubHeadingDiv>
        {friendData.email}
        <StyledImg src="ellipse_icon.png" />
        {friendData.phoneNumber}
      </SubHeadingDiv>
    </StyledFriendRow>
  );
};

export default FriendRow;
