import React from 'react';
import { auth } from "../shared/firebase";
import { signOut } from 'firebase/auth';

import {useNavigate} from "react-router-dom";

import Badge from '@mui/material/Badge';
import FaceIcon from '@mui/icons-material/Face';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import '../App.css';
import styled from 'styled-components';
import { style } from '@mui/system';


const Header = () => {

  const navigate = useNavigate();

  const goToHome=()=>{
    navigate('/');
  }
  const goToAddPage=()=>{
    navigate('post_add');
  }
  // const goToLoginPage=()=>{
  //   navigate('/');
  // }
  return (
    <NavBar>
      <Layout>
        <Logo className='logo' onClick={goToHome}>Insotagram</Logo>
        {/* <UserHi><span style={{fontWeight:"900",fontSize:"0.8rem"}}>닉네임</span>님, 안녕하세요!</UserHi> */}
        <IconBox>
          <AddCircleOutlineIcon onClick={goToAddPage} className="AddBtn" color="action" />
         
            <Badge id='NotiBtn' badgeContent={1} color="primary" style={{margin:"0px 30px"}}>
              <NotificationsIcon id='NoticeBtn'  color="action" />
            </Badge>

          <FaceIcon className='FaceBtn' color="action" style={{marginRight:"30px"}} />
          <LoginIcon onClick={() => {
            signOut(auth);
          }} className="LogBtn" color="action" />
        {/*로그인중일 시 나타날 버튼 <LogoutIcon onClick={goToLoginPage} className="LogBtn" color="action" /> */}
   
        </IconBox>
      </Layout>
    </NavBar>
  )
}

const NavBar = styled.div`
  width: 100%;
  height: 4rem;
  background-color: #EB1D36;
  box-shadow: 0.01px 0.03px 8px #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 99;
`; 

const Layout = styled.div`
  width: 1440px;
  height: 4rem;
  margin: auto;
`;

const Logo = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  float: left;
  margin-left: 5%; 
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
  font-family: 'Pacifico';
`;

const IconBox = styled.div`
  max-width: 40%;
  height: 4rem;
  margin-right: 5%;
  float: right;
  display: flex;
  align-items: center;
`;

// const UserHi = styled.p`
// font-size: 0.7rem;
// color: #fff;
// max-width: 15%;
// float: left;
// `;


export default Header