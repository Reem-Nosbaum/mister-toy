import styles from "../assets/NavBar.module.css";
import logo from "../logoRamos.png";
export default function NavBar() {
  return (
    <div className={styles.nav}>
      <img className={styles.logo} src={logo} alt="Logo" />
      <button className={styles.button}>Pops</button>
      <button className={styles.button}>About</button>
      <button className={styles.button}>Filter By</button>
      <input className={styles.search} placeholder="Search"></input>
    </div>
  );
}
{
  /* <input type="text" class="searchTerm" placeholder="What are you looking for?"> */
}
