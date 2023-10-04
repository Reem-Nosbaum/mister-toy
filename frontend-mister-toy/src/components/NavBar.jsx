import { Link } from "react-router-dom";
import styles from "../assets/NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.nav}>
      <Link to={"/"}></Link>

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
