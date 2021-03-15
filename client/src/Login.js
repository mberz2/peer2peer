import { Button } from "@material-ui/core";
import { auth, provider } from "./Firebase";
import React from "react";
import "./css/Login.css";
import logo from "./img/logo_transparent.png"
import SimpleModal from "./SimpleModal"

function Login() {

  const signIn = () => {
    // Google Login
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">

      <img src={logo} height="300"/>
      </div>

      <div className="login__body">
        <b>Peer2Peer</b> is a free web-chat application designed to
        connect students and learners with peers for tutoring,
        studying, group collaboration, and more. 
<br></br><br></br>
        <b>Currently in Development!</b>
      </div>

      <Button className="login__button" onClick={signIn}>
        Sign in with Google
       </Button>

    <div className="login__bottom">
      <p>By continuing, you are indicating that you accept our 
        Terms of Service and Privacy Policy.</p>
      <br></br>

      <SimpleModal buttonLabel="Terms of Service">
        <h2>Terms of Service</h2>
        <p>
          Placeholder for Terms of Service.
        </p>
      </SimpleModal>

      <SimpleModal buttonLabel="Privacy Policy">
        <h2>Privacy Policy</h2>
        <p>
          Placeholder for Privacy Policy.
        </p>
      </SimpleModal>
    </div>

    </div>
  );
}

export default Login;
