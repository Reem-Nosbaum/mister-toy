import GoogleButton from "react-google-button";
import { useAuth } from "../components/useAuth";
import Button from "../assets/styles/Button";
function SignIn() {
  const { user, signInWithGoogle, logOut } = useAuth();

  if (!user) {
    return <GoogleButton onClick={signInWithGoogle} />;
  } else {
    return (
      <div>
        <h1>hello {user.displayName}</h1>
        <Button text="Log Out" onClick={logOut}></Button>
      </div>
    );
  }
}
export default SignIn;
