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
    <div className="text-black w-64 h-[27rem] border-stone-100 border-4 rounded-xl flex  m-3 flex-col overflow-hidden">
      <img
        src={imageSrc}
        alt="DRAGON BALL Z"
        className="w-80 h-64 hover:scale-110 "
        onMouseOver={handleHover}
        onMouseOut={handleLeave}
      />
      <h3 className="font-sans_Regular text-sm pl-3 pt-4">DRAGON BALL Z</h3>
      <h1 className="pl-3">POP! SUPER SAIYAN GOKU</h1>
      <br />
      <h3 className="font-sans_Regular text-lg pl-3">$13.00</h3>
      <div className="flex items-center flex-col pt-2">
        <Button text="ADD TO CART" />
      </div>
    </div>
  );
}

export default Card;
