import GoogleButton from "react-google-button";
import { useAuth } from "../components/useAuth";
import Button from "../assets/styles/Button";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const { user, signInWithGoogle, logOut } = useAuth();
  const navigate = useNavigate();

  const GoToCart = () => {
    navigate("/cart");
  };

  if (!user) {
    return <GoogleButton onClick={signInWithGoogle} />;
  } else {
    return (
      <div>
        <h1>Hello {user.displayName}</h1>
        <Button text="Log Out" onClick={logOut}></Button>
        <Button text="Go To Cart" onClick={() => GoToCart()}></Button>
      </div>
    );
  }
}
export default SignIn;
