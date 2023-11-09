import { Link } from "react-router-dom";
import footer from "../assets/images/funko-rewardsbanner-herov9-exclusive-bg.png";
import instagram from "../assets/images/instagram-fill.svg";
import youtube from "../assets/images/youtube.svg";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import tiktok from "../assets/images/tiktok.svg";

function Footer() {
  return (
    <div className="text-white sans-serif relative">
      <div className="relative">
        <h1 className="absolute top-16 left-10 text-4xl z-10">
          JOIN OUR FAN REWARDS PROGRAM
        </h1>
        <h2 className="absolute top-28 left-10 text-lg z-10">
          Enroll to Get the Ultimate Fan Experience! Earn Points and Redeem for
          <br /> Exclusive Rewards.
        </h2>
        <img src={footer} alt="footer_img" />
      </div>
      <div className="bg-stone-950 w-full flex justify-center space-x-4 pb-3 pt-2">
        <Link>
          <div className="w-12 h-12 bg-stone-200 rounded-full flex justify-center ">
            <img className="w-8 " src={instagram} alt="instagram" />
          </div>
        </Link>
        <Link>
          <div className="w-12 h-12 bg-stone-200 rounded-full flex justify-center">
            <img className="w-8" src={youtube} alt="youtube" />
          </div>
        </Link>
        <Link>
          <div className="w-12 h-12 bg-stone-200 rounded-full flex justify-center">
            <img className="w-8" src={facebook} alt="facebook" />
          </div>
        </Link>
        <Link>
          <div className="w-12 h-12 bg-stone-200 rounded-full flex justify-center">
            <img className="w-8" src={twitter} alt="twitter" />
          </div>
        </Link>
        <Link>
          <div className="w-12 h-12 bg-stone-200 rounded-full flex justify-center">
            <img className="w-8" src={tiktok} alt="tiktok" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
