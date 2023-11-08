import { Link } from "react-router-dom";
import footer from "../assets/images/funko-rewardsbanner-herov9-exclusive-bg.png";
import instagram from "../assets/images/instagram-fill.svg";

function Footer() {
  return (
    <div className="text-white sans-serif absolute">
      <img src={footer} alt="footer_img" />
      <h1 className="absolute bottom-52 text-4xl mx-10">
        JOIN OUR FAN REWARDS PROGRAM
      </h1>
      <h2 className="absolute bottom-36 mx-10 text-lg">
        Enroll to Get the Ultimate Fan Experience! Earn Points and Redeem for
        <br /> Exclusive Rewards.
      </h2>
      <div className="bg-stone-950 flex ">
        <Link to="https://funko.com/">
          <img className="w-10 h-10" src={instagram} alt="instagram" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
