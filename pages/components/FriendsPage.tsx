import React from "react";
import styled from "styled-components";
import { FriendType } from "../data/FriendType";
import FriendsListContainer from "./FriendsListContainer";
import FilterButton from "./FilterButton";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100vh;
`;

const StyledFriendsContainer = styled.div`
  align-items: center;
`;

const HeaderBox = styled.div`
  box-shadow: 0px 4px 4px rgba(162, 162, 162, 0.1);
  padding-left: 40px;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
`;

const FilterRow = styled.div`
  display: flex;
  align-items: center;
  margin: 15px;
`;

const DividerImg = styled.img`
  margin: 0px 15px;
`;

type FriendsPageProps = {
  data: FriendType[];
};

const FriendsPage: React.FC<FriendsPageProps> = ({ data }) => {
  return (
    <StyledContainer data-test-ids="FriendsPage">
      <HeaderBox>
        <h2>Friends</h2>
      </HeaderBox>
      <StyledFriendsContainer>
        <FilterRow>
          <FilterButton />
          <DividerImg src="vertical_bar.png" />
          <div>Add Clear All Option</div>
        </FilterRow>
        <FriendsListContainer friendsData={data} />
      </StyledFriendsContainer>
    </StyledContainer>
  );
};

export default FriendsPage;
