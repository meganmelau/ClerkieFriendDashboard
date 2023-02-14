import React from "react";
import styled from "styled-components";
import { colors } from "../StyleVariables";

const PillButton = styled.button`
  background: ${(props) => (props.isOpen ? "#424242" : "#FFFFFF")};
  border: 1px solid ${colors.lightGrey};
  border-radius: 30px;
  width: 59px;
  padding: 5px;
`;

const FilterImg = styled.img`
  object-fit: contain;
`;

type FilterButtonProps = {
  onClick: () => void;
  isOpen: boolean;
};
const FilterButton: React.FC<FilterButtonProps> = ({ onClick, isOpen }) => {
  return (
    <PillButton onClick={onClick} isOpen={isOpen}>
      <FilterImg src="filter_icon.png" />
    </PillButton>
  );
};

export default FilterButton;
