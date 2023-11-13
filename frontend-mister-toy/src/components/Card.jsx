import { useState } from "react";
import pop3 from "../assets/images/3807-1.png";
import pop4 from "../assets/images/3807-2.png";
import Button from "../assets/styles/Button";

function Card() {
  const [imageSrc, setImageSrc] = useState(pop3);

  const handleHover = () => {
    setImageSrc(pop4);
  };

  const handleLeave = () => {
    setImageSrc(pop3);
  };

  return (
    <div className="text-black w-64 h-96 border-stone-100 border-4 rounded-xl flex items-center m-3 flex-col">
      <img
        src={imageSrc}
        alt="DRAGON BALL Z"
        className="w-80 h-64"
        onMouseOver={handleHover}
        onMouseOut={handleLeave}
      />
      <h3 className="font-sans_Regular text-sm">DRAGON BALL Z</h3>
      <h1>POP! SUPER SAIYAN GOKU</h1>
      {/* <h3 className="relative top-7 right-20 font-sans_Regular text-sm">
        13.00 $
      </h3> */}

      <Button text="ADD TO CART" />
    </div>
  );
}

export default Card;
