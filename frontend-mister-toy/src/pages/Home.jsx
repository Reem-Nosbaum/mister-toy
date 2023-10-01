import PopCard from "../components/PopCard";
import styles from "../assets/Home.module.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.h1}>New Picks for You!</h1>
      <li className={styles.cards}>
        <PopCard />
        <PopCard />
        <PopCard />
        <PopCard />
        <PopCard />
        <PopCard />
        <PopCard />
      </li>
    </>
  );
}
