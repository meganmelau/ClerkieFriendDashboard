import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../StyleVariables";
import { FriendStatus } from "../../data/FriendType";
import ClearAllButton from "./ClearAllButton";

const Menu = styled.div`=
  background: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  z-index: 2;
  margin-top: 10px;
`;

const ApplyButton = styled.button`
  background-color: ${colors.darkGrey};
  color: white;
  border-radius: 6px;
  border: 1px solid ${colors.darkGrey};
  width: 95%;
  height: 45px;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
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
  width: 100%;
  margin: 10px;
`;

const Label = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #686868;
  margin: 25px;
`;

const OptionsText = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #424242;
  width: 100%;
  padding-right: 100px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;
const OptionsDiv = styled.div`
  display: flex;
  margin: 0px 25px 25px 25px;
`;
const MenuHeader = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #424242;
`;

const CloseIcon = styled.img`
  padding-top: 5px;
`;

type FilterMenuProps = {
  handleClose: () => void;
  handleClear: () => void;
  handleApply: (newFilters: FriendStatus[]) => void;
  setFilters: ([]) => void;
};
// Cleanup: remove the type none and change to accept null so don't need to filter
const FilterMenu: React.FC<FilterMenuProps> = ({
  handleClose,
  handleClear,
  handleApply,
  setFilters,
}) => {
  const [inputFilterValues, setInputFilterValues] = useState([]);

  const friendStatusArr = Object.values(FriendStatus).filter(
    (friendStat) => friendStat !== FriendStatus.None
  );

  const handleCheckFilter = (event) => {
    console.log("handleCheckfilter", event.target.checked, event.target.value);
    if (event.target.checked) {
      console.log(true);
      setInputFilterValues([...inputFilterValues, event.target.value]);
    } else {
      setInputFilterValues(
        // bug here fix later
        inputFilterValues.filter((value) => {
          value === event.target.value;
        })
      );
    }
  };

  return (
    <Menu>
      <FlexContainer>
        <FilterHeaderContainer>
          <ClearAllButton hasFilters={false} handleClear={handleClear} />
          <MenuHeader>Filter</MenuHeader>
          <CloseButton onClick={handleClose}>
            <CloseIcon src="close_icon.png" />
          </CloseButton>
        </FilterHeaderContainer>
        <Divider />
        <OptionsContainer>
          <div>
            <Label>Friend Status</Label>
            {friendStatusArr.map((friendStat, index) => {
              return (
                <label>
                  <OptionsDiv>
                    <OptionsText>{friendStat}</OptionsText>
                    <input
                      type="checkbox"
                      value={friendStat}
                      onChange={(event) => handleCheckFilter(event)}
                    />
                  </OptionsDiv>
                </label>
              );
            })}
          </div>
          <ApplyButton
            onClick={() => {
              console.log("APPLY", inputFilterValues);
              // setFilters(inputFilterValues);
              handleApply(inputFilterValues);
            }}
          >
            Apply
          </ApplyButton>
        </OptionsContainer>
      </FlexContainer>
    </Menu>
  );
};

export default FilterMenu;
