import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FriendStatus, FriendType } from "../../data/FriendType";
import FriendsListContainer from "./FriendsListContainer";
import FilterButton from "../Filter/FilterButton";
import { componentStrings } from "../strings";
import FilterMenu from "../Filter/FilterMenu";
import ClearAllButton from "../Filter/ClearAllButton";

const FriendPageStrings = componentStrings.FriendsPage;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100vh;
  overflow-y: scroll;
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
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState(Object.values(FriendStatus));
  const [friendData, setFriendData] = useState<FriendType[]>(data);

  useEffect(() => {
    const filteredData = data.filter((friend) => {
      return filters.includes(friend.friendStatus);
    });
    setFriendData(filteredData);
  }, [filters]);

  const handleClickFilterMenu = () => {
    return setIsOpen(!isOpen);
  };

  // clicking the apply button always closes it
  const handleApply = (newFilters) => {
    setFilters(newFilters);
    setIsOpen(false);
  };

  const handleClose = () => {
    return setIsOpen(false);
  };

  const handleClear = () => {
    setFriendData(data);
  };

  const hasFilters = filters.length > 0 && filters.length < 3;

  return (
    <StyledContainer data-test-ids="FriendsPage">
      <HeaderBox>
        <h2>{FriendPageStrings.friends}</h2>
      </HeaderBox>
      <StyledFriendsContainer>
        <FilterRow>
          <div>
            <FilterButton
              onClick={handleClickFilterMenu}
              isOpen={isOpen}
              handleApply={handleApply}
              handleClose={handleClose}
              filters={filters}
              hasFilters={hasFilters}
            />
          </div>
          <DividerImg src="vertical_bar.png" />
          <ClearAllButton hasFilters={hasFilters} handleClear={handleClear} />
        </FilterRow>
        <FriendsListContainer friendsData={friendData} />
      </StyledFriendsContainer>
    </StyledContainer>
  );
};

export default FriendsPage;
