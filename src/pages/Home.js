import React from 'react';


import styled from 'styled-components';

import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

import Header from '../components/Header';
import PostCardLeft from '../components/PostCardLeft';
import PostCardCenter from '../components/PostCardCenter'
import PostCardRight from '../components/PostCardRight';


function Home() {
  return (
    <>
      <Header />
      <CardsBox>
        <PostCardLeft />
        <PostCardCenter />
        <PostCardRight />
      </CardsBox>
      <TopBtn><ArrowCircleUpIcon id="TopBtn" color="action"/></TopBtn>
    </>
  )
}


const CardsBox = styled.div`
  width: 70%;
  overflow: hidden;
  margin: 70px auto;
`;

const TopBtn = styled.div`
  position: fixed;
  bottom: 2%;
  right: 2%;
`;
// const Layout = styled.div`
//   width: 0%;
//   margin: 100px auto;
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
//   background-color: blue;

// `;
// // const Btn = styled.div`
//     width: 80px;
//     height: 30px;
//     border: red 2px solid;
//     border-radius: 5px;
// `;

export default Home