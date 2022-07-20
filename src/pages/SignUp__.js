// import React from 'react';

// import {auth, db} from "../shared/firebase";
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { collection, addDoc } from 'firebase/firestore';

// const SignUp = () => {

//   const sign_up = async () => {
//     const user = await createUserWithEmailAndPassword(
//     auth,
//     id_ref.current.value,
//     pw_ref.current.value,
//     pwConfirm_ref.current.value
//     );
//     console.log(user);

//     const user_doc = await addDoc(collection(db, "users"), {
//       user_id: user.user.email,
//       name: name_ref.current.value,
//   });

//   console.log(user_doc.id);
//   };
//     const id_ref = React.useRef(null);
//     const name_ref = React.useRef(null);
//     const pw_ref = React.useRef(null);
//     const pwConfirm_ref = React.useRef(null);
   

//   return (
//     <div>
//       아이디 : <input ref={id_ref} type="email"/> <br/>
//       이름 : <input ref={name_ref} type="name"/> <br/>
//       비밀번호 : <input ref={pw_ref} type="password"/> <br/>
//       비밀번호 확인 : <input ref={pwConfirm_ref} type="password" /> <br/>
    
//     <button onClick={sign_up}>회원가입</button>


//     </div>
//   )
// }

// export default SignUp;