import { Link } from "react-router-dom";
import styles from "../assets/NavBar.module.css";
import logo from "../assets/logo-site.png";

export default function NavBar() {
  return (
    <div className={styles.nav}>
      <Link className={styles.logo} to={"/"}>
        <img className={styles.logo} src={logo}></img>
      </Link>

      <Link className={styles.a} to={"Pops"}>
        Pops
      </Link>
      <Link className={styles.a} to={"About"}>
        About
      </Link>
      <Link className={styles.a} to={"FilterBy"}>
        Filter By
      </Link>

      <input className={styles.search} placeholder="Search"></input>
    </div>
  );
}
