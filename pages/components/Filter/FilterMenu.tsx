import React from "react";
import styled from "styled-components";
import { colors } from "../StyleVariables";
import { FriendStatus } from "../../data/FriendType";
import ClearAllButton from "./ClearAllButton";

const Menu = styled.div`
  width: 320px;
  height: 286px;
  left: 560px;
  top: 173px;
  background: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
`;

const ApplyButton = styled.button`
  background-color: ${colors.darkGrey};
  color: white;
  border-radius: 6px;
  border: 1px solid ${colors.darkGrey};
  width: 95%;
  height: 45px;
  margin-top: 10px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Divider = styled.hr`
  border: 1px solid #eaeaea;
  width: 100%;
  border-radius: 2px;
`;

const CloseButton = styled.button`
  border: 0;
  background: white;
`;

const FilterHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0px 10px;
`;

const Label = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #686868;
`;

const OptionsText = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #424242;
  width: 100%;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

// Cleanup: remove the type none and change to accept null so don't need to filter
const FilterMenu = () => {
  const friendStatusArr = Object.values(FriendStatus).filter(
    (friendStat) => friendStat != FriendStatus.None
  );
  return (
    <Menu>
      <FlexContainer>
        <FilterHeaderContainer>
          <ClearAllButton hasFilters={false} />
          <h3>Filter</h3>
          <CloseButton>
            <img src="close_icon.png" />
          </CloseButton>
        </FilterHeaderContainer>

        <Divider />
        <OptionsContainer>
          <Label>Friend Status</Label>
          {friendStatusArr.map((friendStat, index) => {
            return (
              <label>
                <OptionsText>{friendStat}</OptionsText>
                <input
                  type="checkbox"
                  // checked={item.selected}
                  // onChange={() => this.changeHandler(index)}
                />
              </label>
            );
          })}
          <ApplyButton>Apply</ApplyButton>
        </OptionsContainer>
      </FlexContainer>
    </Menu>
  );
};

export default FilterMenu;
