import React from 'react';
import './Login.css';
import image1 from '../images/Discord.png';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';

function Login() {
   const signIn = () => {
      // Google login
      auth.signInWithPopup(provider).catch((error) => alert(error.message));
   };

   return (
      <div className="login">
         <div className="login__logo">
            <img src={image1} alt="discord logo" />
         </div>

         <Button onClick={signIn}>Sign In</Button>
      </div>
   );
}

export default Login;
