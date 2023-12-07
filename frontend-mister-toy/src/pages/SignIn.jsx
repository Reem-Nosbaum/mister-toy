import GoogleButton from "react-google-button";
import { UserAuth } from "../context/AuthContext";

function SignIn() {
  const { googleSignIn } = UserAuth();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="signin">
      Sign In
      <GoogleButton onClick={handleGoogleSignIn} />
    </div>
  );
}

export default SignIn;
