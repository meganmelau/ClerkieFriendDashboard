import React from "react";
import styled from "styled-components";
import { FriendStatus } from "../../data/FriendType";
import { colors } from "../StyleVariables";
import FilterMenu from "./FilterMenu";

const PillButton = styled.button`
  background: ${(props) =>
    props.isOpen || props.hasFilters ? "#424242" : "#FFFFFF"};
  border: 1px solid ${colors.lightGrey};
  border-radius: 30px;
  width: 59px;
  padding: 5px;
`;

const FilterImg = styled.img`
  object-fit: contain;
`;
const CountText = styled.span`
  // color: white;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  margin-left: 10px;
`;
const PillContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

type FilterButtonProps = {
  onClick: () => void;
  isOpen: boolean;
  handleClose: () => void;
  handleApply: (newFilters: FriendStatus[]) => void;
  filters: FriendStatus[];
  hasFilters: boolean;
};

const FilterButton: React.FC<FilterButtonProps> = ({
  onClick,
  isOpen,
  handleClose,
  handleApply,
  filters,
  hasFilters,
}) => {
  const iconVersion = isOpen ? "white_filter.png" : "filter_icon.png";

  return (
    <div>
      <PillButton onClick={onClick} isOpen={isOpen}>
        <PillContainer>
          <FilterImg src={iconVersion} />
          {hasFilters && <CountText>{filters.length}</CountText>}
        </PillContainer>
      </PillButton>
      {isOpen && (
        <FilterMenu handleClose={handleClose} handleApply={handleApply} />
      )}
    </div>
  );
};

export default FilterButton;
