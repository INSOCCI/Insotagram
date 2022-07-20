import React from 'react';
import {auth} from "../shared/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function SignUp(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="./">
        Insotagram
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const Login = () => {
    const id_ref = React.useRef(null);
    const pw_ref = React.useRef(null);

    const log_in = async () => {
        console.log(id_ref.current.value, pw_ref.current.value);
        const user = await signInWithEmailAndPassword(
            auth, id_ref.current.value, pw_ref.current.value
        );
        console.log(user);
        
       };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      id: data.get('id'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 25,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
         
          <Typography component="h1" variant="h5">
            LOGIN
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              inputRef={id_ref}
              margin="normal"
              required
              fullWidth
              id="id"
              label="e-mail Id"
              name="id"
              autoComplete="id"
              autoFocus
            />
            <TextField
              inputRef={pw_ref}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          
            <Button onClick={log_in}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             로그인하기
            </Button>
            <Grid >
              <Grid item>
                <Link href="./signup" variant="body2">
                  {"아직 회원이 아니신가요?　회원가입"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <SignUp sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
export default Login;