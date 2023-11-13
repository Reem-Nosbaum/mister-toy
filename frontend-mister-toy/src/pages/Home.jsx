import ImageSlider from "../components/ImageSlider";
import image1 from "../assets/images/cover/Feature-FNAFHoliday-Background.jpg";
import image2 from "../assets/images/cover/Feature-GiftGuide-Background.jpg";
import image3 from "../assets/images/cover/Feature-OnePiece-Map-BG.jpg";
import pop1 from "../assets/images/Feature-ornaments-Product.png";
import pop3 from "../assets/images/Feature-OnePiece-Product-72111.png";
import pop2 from "../assets/images/Feature-GiftGuide-Games-Product.png";
import Card from "../components/Card";

function Home() {
  const slides = [
    {
      bgImg: image1,
      popImg: pop1,
      title: "DASHING DROPS",
      h2: ["SNOWDROPS,", "GUMDROPS…"],
      h3: [
        "Merry Funko Drops! Prep for the Holidays with New Exclusives and",
        "Save 10% Now Through Nov. 5.",
      ],
    },
    {
      bgImg: image2,
      popImg: pop2,
      title: "GIFTS WITHOUT GUESSING",
      h2: ["NO NEED TO ROLL", "THE DICE"],
      h3: [
        "Consult Our Gift Guide to Find the Perfect Presents to Fill Any Gaps in",
        "Your List.",
      ],
    },
    {
      bgImg: image3,
      popImg: pop3,
      title: "OnePiece",
      h2: ["TRAVEL TO THE", "LAND OF WANO"],
      h3: [
        "Gear Up Your One Piece Collection for the Great Battle That’s Incoming!",
        "Shop All Things New to One Piece Today!",
      ],
    },
  ];

  return (
    <div>
      <ImageSlider slides={slides} />
      <h1 className="text-6xl items-center justify-center flex pt-3">
        NEW PICKS FOR YOU!
      </h1>
      <div className="flex">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
