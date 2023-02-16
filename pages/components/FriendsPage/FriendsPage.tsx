import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FriendType } from "../../data/FriendType";
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
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState([]);
  const [friendData, setFriendData] = useState<FriendType[]>(data);

  console.log(" FRIENDS PAGE FILTERS", filters);

  useEffect(() => {
    console.log(" USE EFFECT ", filters);
    const filteredData = data.filter((item) => {
      return filters.includes(item.friendStatus);
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

  const closeFilterMenu = () => {
    return setIsOpen(false);
  };

  const handleClearFriendsPage = () => {
    setFriendData(data);
  };

  const filterData = () => {
    const filteredData = data.filter((item) => {
      return filters.includes(item.friendStatus);
    });
    return filteredData;
  };

  return (
    <StyledContainer data-test-ids="FriendsPage">
      <HeaderBox>
        <h2>{FriendPageStrings.friends}</h2>
      </HeaderBox>
      <StyledFriendsContainer>
        <FilterRow>
          <div>
            <FilterButton onClick={handleClickFilterMenu} isOpen={isOpen} />
            {isOpen && (
              <FilterMenu
                handleClose={closeFilterMenu}
                handleClear={handleClear}
                handleApply={handleApply}
                setFilters={setFilters}
              />
            )}
          </div>
          <DividerImg src="vertical_bar.png" />
          <ClearAllButton
            hasFilters={filters.length > 0}
            handleClear={handleClear}
          />
        </FilterRow>
        <FriendsListContainer friendsData={friendData} />
      </StyledFriendsContainer>
    </StyledContainer>
  );
};

export default FriendsPage;
