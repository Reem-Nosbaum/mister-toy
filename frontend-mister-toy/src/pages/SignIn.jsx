// import GoogleButton from "react-google-button";
import GoogleButton from "react-google-button";
import { UserAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

function SignIn() {
  const { googleSignIn, user, logOut } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signin">
      {user?.displayName ? (
        <button onClick={handleGoogleSignOut}>LogOut</button>
      ) : (
        <GoogleButton onClick={handleGoogleSignIn} />
      )}
    </div>
  );
}

export default SignIn;
