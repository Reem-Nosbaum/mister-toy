import footer from "../assets/images/funko-rewardsbanner-herov9-exclusive-bg.png";

function Footer() {
  return (
    <div>
      <div className="text-white sans-serif absolute">
        <img src={footer} alt="logo" />
        <h1 className="relative bottom-56 text-3xl left-7">
          JOIN OUR FAN REWARDS PROGRAM
        </h1>
        <h2 className="relative bottom-52 text-xl left-7">
          Enroll to Get the Ultimate Fan Experience! Earn Points and Redeem for
          <br /> Exclusive Rewards.
        </h2>
      </div>
      <div className="bg-stone-100 relative top-64 h-24"> instegram</div>
    </div>
  );
}

export default Footer;
