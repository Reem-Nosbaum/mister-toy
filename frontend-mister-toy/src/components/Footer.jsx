import { Link } from "react-router-dom";
import footer from "../assets/images/funko-rewardsbanner-herov9-exclusive-bg.png";
import instagram from "../assets/images/instagram-fill.svg";
import youtube from "../assets/images/youtube.svg";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import tiktok from "../assets/images/tiktok.svg";
import Tiktok from "./tiktok";
import Instagram from "./Instagram.JSX";
import Youtube from "./Youtube";
import Facebook from "./Facebook";
import Twiter from "./Twiter";

function Footer() {
  return (
    <div className="text-white sans-serif relative">
      <div className="relative">
        <h1 className="absolute top-16 left-10 text-4xl ">
          JOIN OUR FAN REWARDS PROGRAM
        </h1>
        <h2 className="absolute top-28 left-10 text-lg ">
          Enroll to Get the Ultimate Fan Experience! Earn Points and Redeem for
          <br /> Exclusive Rewards.
        </h2>
        <img src={footer} alt="footer_img" />
      </div>
      <div className="bg-stone-950 w-full flex justify-center space-x-4 pb-3 pt-">
        <Link>
          <div className="w-12 h-12 bg-stone-200 rounded-full flex justify-center instagram">
            <Instagram />
            {/* <img className="w-8 " src={instagram} alt="instagram" /> */}
          </div>
        </Link>
        <Link>
          <div className="w-12 h-12 bg-stone-200 rounded-full flex justify-center youtube">
            <Youtube />
            {/* <img className="w-8" src={youtube} alt="youtube" /> */}
          </div>
        </Link>
        <Link>
          <div className="w-12 h-12 bg-stone-200 rounded-full flex justify-center facebook">
            <Facebook />
            {/* <img className="w-8" src={facebook} alt="facebook" /> */}
          </div>
        </Link>
        <Link>
          <div className="w-12 h-12 bg-stone-200 rounded-full flex justify-center twiter">
            <Twiter />
            {/* <img className="w-8" src={twitter} alt="twitter" /> */}
          </div>
        </Link>
        <Link>
          <div className="w-12 h-12 bg-stone-200 rounded-full flex justify-center tiktok ">
            <Tiktok />
            {/* <img className="w-8" src={tiktok} alt="tiktok" /> */}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
