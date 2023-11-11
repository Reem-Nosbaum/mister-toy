import FreddyThumbnail from "../assets/images/Freddy-Thumbnail.png";
import JakeSullyThumbnail from "../assets/images/Jake-Sully-Thumbnail.png";
import HalfheadBackpckThumbnail from "../assets/images/Halfhead-backpck-Thumbnail.png";
import HalfheadHoodieThumbnail from "../assets/images/Halfhead-hoodie-Thumbnail.png";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const DropDownMenu = ({ isVisible, type }) => {
  const navigate = useNavigate();
  const options = {
    fandoms: [
      { name: "SHOP ALL", img: FreddyThumbnail, link: "shop-all" },
      { name: "MOVIES & TV", img: JakeSullyThumbnail, link: "movies&tv" },
    ],
    category: [
      {
        name: "ACCESSORIES",
        img: HalfheadBackpckThumbnail,
        link: "accessories",
      },
      { name: "APPAREL", img: HalfheadHoodieThumbnail, link: "apparel" },
    ],
  };

  const isOdd = (num) => {
    if (num % 2) return "bg-stone-100";
    else return "bg-stone-200";
  };

  const styleNav = (type) => {
    if (type === "fandoms") return { left: "188px", top: "80px" };
    if (type === "category") return { left: "325px", top: "80px" };
  };

  return (
    <div
      className={`drop-down-menu absolute text-stone-800  ${
        isVisible ? "block" : "hidden"
      }`}
      style={styleNav(type)}
    >
      <ul>
        {options[type].map((a, idx) => (
          <li
            onClick={(ev) => {
              ev.stopPropagation();
              navigate(`/${[type]}/${a.link}`);
            }}
            key={idx}
            className={`w-96 h-20 ${isOdd(
              idx
            )}  flex items-center hover:underline hover:decoration-2 `}
          >
            <img className="w-20 max-h-full " src={a.img} alt={a.name} />
            <h1>{a.name}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};
