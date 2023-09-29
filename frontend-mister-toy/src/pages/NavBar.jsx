import styles from "../assets/NavBar.module.css";
import logo from "../logoRamos.png";
import Button from "../UI/Button";
export default function NavBar() {
  return (
    <div className={styles.nav}>
      <Button to={"/"}>
        <img className={styles.logo} src={logo} alt="Logo" />
      </Button>
      <Button to={"Pops"}>Pops</Button>
      <Button to={"About"}>About</Button>
      <Button to={"FilterBy"}>Filter By</Button>

      <input className={styles.search} placeholder="Search"></input>
    </div>
  );
}
{
  /* <input type="text" class="searchTerm" placeholder="What are you looking for?"> */
}
