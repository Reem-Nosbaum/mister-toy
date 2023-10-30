import FreddyThumbnail from "../assets/images/Freddy-Thumbnail.png";
import JakeSullyThumbnail from "../assets/images/Jake-Sully-Thumbnail.png";

// eslint-disable-next-line react/prop-types
export const DropDownMenu = ({ isVisible, type }) => {
  const options = {
    fandoms: [
      { name: "shop all", img: FreddyThumbnail },
      { name: "tv", img: JakeSullyThumbnail },
    ],
    category: [{ name: "shop all", img: "ss" }],
  };

  const isOdd = (num) => {
    if (num % 2) return "bg-stone-100";
    else return "bg-stone-200";
  };

  const styleNav = (type) => {
    if (type === "fandoms") return { left: "188px", top: "80px" };
    if (type === "category") return { left: "325px", top: "80px" };
    return {};
  };

  return (
    <div
      className={`drop-down-menu absolute ${isVisible ? "block" : "hidden"}`}
      style={styleNav(type)}
    >
      <ul>
        {options[type].map((a, idx) => (
          <li
            key={idx}
            className={`w-96 h-20 ${isOdd(idx)}  flex items-center`}
          >
            <img className="w-20 max-h-full" src={a.img} alt={a.name} />
            <h1>{a.name}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};
