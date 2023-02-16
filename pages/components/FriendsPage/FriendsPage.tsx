import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FriendStatus, FriendType } from "../../data/FriendType";
import FriendsListContainer from "./FriendsListContainer";
import FilterButton from "../Filter/FilterButton";
import { componentStrings } from "../strings";
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
  fetchedData: FriendType[];
};

const FriendsPage: React.FC<FriendsPageProps> = ({ data, fetchedData }) => {
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
  const [fetchMore, setFetchMote] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState(Object.values(FriendStatus));
  const [friendData, setFriendData] = useState<FriendType[]>(data);

  const loadMoreFriends = () => {
    // here normally I would call an api, I will simulate getting the data and updating state
    console.log("fetchedData", fetchedData);
    setFriendData((oldfriends) => [...oldfriends, ...fetchedData]);
  };

  const handleScroll = (event) => {
    console.log(event.target.documentElement.scrollTop);
    console.log(window.innerHeight);
    console.log(event.target.documentElement.scrollHeight);
    const scrollHeight = event.target.documentElement.scrollHeight;
    const currentHeight = Math.ceil(
      event.target.documentElement.scrollTop + window.innerHeight
    );
    if (currentHeight + 1 >= scrollHeight) {
      console.log("at the bottom");
      loadMoreFriends();
    }
  };

  useEffect(() => {
    // could add getting data on first render here
    // tracking the scroll to bottom of page
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    setFilters(Object.values(FriendStatus));
    setFriendData(data);
  };

  const hasFilters = filters.length > 0 && filters.length < 3;

  return (
    <StyledContainer data-test-ids="FriendsPage" id="myDIV">
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
