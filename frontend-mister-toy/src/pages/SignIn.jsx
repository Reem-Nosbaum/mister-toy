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
    return (
      <div className="font-sens text-xl flex justify-center flex-col items-center p-10 gap-10 text-center ">
        <h1>
          Hi! <br /> Sign In to unlock features and more surprise in the website
          :)
        </h1>
        <GoogleButton onClick={signInWithGoogle} />{" "}
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="font-sens text-xl flex justify-center pt-10">Hello</h1>
        <h1 className="font-sens text-xl flex justify-center p-5 uppercase">
          {user.displayName}
        </h1>
        <div className="flex justify-center items-center gap-10 p-10 flex-col pb-32">
          <Button text="Go To Cart" onClick={() => GoToCart()}></Button>
          <Button text="Log Out" onClick={logOut}></Button>
        </div>
      </div>
    );
  }
}
export default SignIn;
