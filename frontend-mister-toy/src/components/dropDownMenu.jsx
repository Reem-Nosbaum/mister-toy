import FreddyThumbnail from "../assets/images/Freddy-Thumbnail.png";
import JakeSullyThumbnail from "../assets/images/Jake-Sully-Thumbnail.png";

export const DropDownMenu = () => {
  const options = {
    fandoms: [
      { name: "shop all", img: FreddyThumbnail },
      { name: "tv", img: JakeSullyThumbnail },
      { name: "anima", img: JakeSullyThumbnail },
    ],
    category: [{ name: "shop all", img: "ss" }],
  };

  const isOdd = (num) => {
    if (num % 2) return "bg-stone-100";
    else return "bg-stone-200";
  };
  return (
    <div className="drop-down-menu   absolute top-20">
      <ul>
        {options.fandoms.map((a, idx) => (
          <li
            key={idx}
            className={`w-96 h-20 ${isOdd(idx)}  flex items-center`}
          >
            <img className="w-20 max-h-full" src={a.img} alt={a.name} />
            <h1 className=" ">{a.name}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};
