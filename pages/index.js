import Head from 'next/head';
import FriendsPage from "../components/FriendsPage/FriendsPage";
import Navbar from "../components/NavBar/Navbar"
import styled from "styled-components";
import FriendsData from "../data/FriendsData";
import FriendsDataFetched from '../data/FriendsDataFetched';

const StyledContainer = styled.body`
display: flex;
justify-content: flex-start;
  overflow: hidden;
    height: 100vh;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Clerkie Friends Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <main >
          <StyledContainer>
            <Navbar/>
            <FriendsPage data={FriendsData} fetchedData={FriendsDataFetched} />
          </StyledContainer>
        </main>
      </body>
    </>
  )
}
