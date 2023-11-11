import pop3 from "../assets/images/3807-1.png";

function Card() {
  return (
    <div className="text-black w-64 h-96 border-stone-100 border-4 rounded-xl flex  items-center m-3 flex-col ">
      <img src={pop3} alt="onepice" className="w-80 h-64" />
      <h3>DRAGON BALL Z</h3>
      <h1>POP! SUPER SAIYAN GOKU</h1>
      <h3>13$</h3>
    </div>
  );
}

export default Card;
