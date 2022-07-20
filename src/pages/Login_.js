import React from "react";
import { Link } from "react-router-dom";
import {auth} from "../shared/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";




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

  return (
    <div>
        아이디(이메일) : <input ref={id_ref} placeholder='이메일 아이디를 입력하세요.' /> <br />
        비밀번호 : <input ref={pw_ref} placeholder='비밀번호를 입력하세요.' /> <br />
        <Link to="./signup"> {"아직 계정이 없으신가요? 회원가입 하러가기 >"} </Link> <br />
        <button onClick={log_in}> 로그인 </button>
    </div>
  )
}

export default Login;