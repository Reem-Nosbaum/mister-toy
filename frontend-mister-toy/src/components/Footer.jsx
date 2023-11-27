import { Link } from "react-router-dom";
import footer from "../assets/images/funko-rewardsbanner-herov9-exclusive-bg.png";
import Tiktok from "../assets/styles/Tiktok";
import Instagram from "../assets/styles/Instagram";
import Youtube from "../assets/styles/Youtube";
import Facebook from "../assets/styles/Facebook";
import Twiter from "../assets/styles/Twiter";

function Footer() {
  return (
    <div className="text-white font-sans relative">
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
      <div className="bg-stone-950 w-full flex justify-center space-x-4 pb-3 pt-3">
        <Link>
          <div className="w-12 h-12 bg-stone-200 rounded-full flex justify-center instagram">
            <Instagram />
          </div>
        </Link>
        <Link>
          <div className="w-12 h-12 bg-stone-200 rounded-full flex justify-center youtube">
            <Youtube />
          </div>
        </Link>
        <Link>
          <div className="w-12 h-12 bg-stone-200 rounded-full flex justify-center facebook">
            <Facebook />
          </div>
        </Link>
        <Link>
          <div className="w-12 h-12 bg-stone-200 rounded-full flex justify-center twiter">
            <Twiter />
          </div>
        </Link>
        <Link>
          <div className="w-12 h-12 bg-stone-200 rounded-full flex justify-center tiktok ">
            <Tiktok />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
