import React from "react";
import styled from "styled-components";
import { componentStrings } from "../strings";
import { colors } from "../StyleVariables";

const FriendPageStrings = componentStrings.FriendsPage;

// if the state has filters than change color to fontBlue
const ClearButton = styled.button`
  color: ${(hasFilters) => (hasFilters ? "#3399FF" : "#D7D7D7")};
  border: 0;
  background: white;
`;

type ClearAllButtonProps = {
  hasFilters: boolean;
};

const ClearAllButton: React.FC<ClearAllButtonProps> = ({ hasFilters }) => {
  console.log(hasFilters);
  return (
    <div>
      <ClearButton>{FriendPageStrings.clear}</ClearButton>
    </div>
  );
};

export default ClearAllButton;
