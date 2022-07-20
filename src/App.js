import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./shared/firebase";

import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import PostAdd from './pages/PostAdd';


function App() {

  const [is_login, setIsLogin] = React.useState(false);

  console.log(auth.currentUser);

  const loginCheck = async (user) => {
    if(user) {
      setIsLogin(true);
    }else{
      setIsLogin(false);
    }
  }
  React.useEffect(() => {
    onAuthStateChanged(auth, loginCheck);
  }, []);

  return (
    <div className="App">
      <Routes>
        
        <Route path="/signup" element={<SignUp />} />
        {is_login? (
          <Route path="/" element={<Home />} /> 
        ) : (
          <Route path="/" element={<Login />} />
        )}
        <Route path="/post_add" element={<PostAdd />} />
      </Routes>
    </div>
  );
}

export default App;
