import React from "react";
import styled from "styled-components";
import { colors } from "./StyleVariables";

const PillButton = styled.button`
  background: #ffffff;
  border: 1px solid ${colors.lightGrey};
  border-radius: 30px;
  width: 59px;
  padding: 5px;
`;

const FilterImg = styled.img`
  object-fit: contain;
`;

const FilterButton = () => {
  return (
    <PillButton>
      <FilterImg src="filter_icon.png" />
    </PillButton>
  );
};

export default FilterButton;
