import React from 'react';

import {auth} from "../shared/firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';

// 스타일 관련
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {db} from "../shared/firebase";


function Copyright(props) {}
const theme = createTheme();

export default function SignUp() {

    const id_ref = React.useRef(null);
    const name_ref = React.useRef(null);
    const pw_ref = React.useRef(null);
    const pwConfirm_ref = React.useRef(null);
    const signup = async () => {

    console.log(auth, id_ref.current.value, pw_ref.current.value)
    
    const user = await createUserWithEmailAndPassword(
        auth,
        id_ref.current.value,
        pw_ref.current.value,
        pwConfirm_ref.current.value
    );
    console.log(user)

    const user_doc = await addDoc(collection(db, "users"), {
      user_id: user.user.email,
      name: name_ref.current.value,
     });

     console.log(user_doc.id);

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user_info = {
    id: data.get('id'),
    nickname: data.get('NickName'),
    password: data.get('password'),
    passwordCheck: data.get('password-check')
    };
    console.log(user_info);
    const user = signInWithEmailAndPassword(auth, '{id}','{NickName}');
    console.log(user);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 18,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
         
          <Box component="form" noValidate  sx={{ mt: 3 }}onSubmit={handleSubmit}> 
            <Grid container spacing={2}>
             
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="id"
                  label="E-mail 아이디를 입력하세요."
                  name="id"
                  autoComplete="id"
                  inputRef={id_ref}
                />
                
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="NickName"
                  name="NickName"
                  label="사용할 닉네임을 입력하세요."
                  autoComplete="NickName"
                  inputRef={name_ref}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="비밀번호를 입력하세요."
                  type="password"
                  id="password"
                  autoComplete="password"
                  inputRef={pw_ref}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password-check"
                  label="비밀번호를 확인합니다."
                  type="password"
                  id="password-checker"
                  autoComplete="password-checker"
                  inputRef={pwConfirm_ref}
                />
              </Grid>
              
            </Grid>
            <Button
              // type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={signup}
             >
              회원가입하기
            </Button>
           
        </Box>
    </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}