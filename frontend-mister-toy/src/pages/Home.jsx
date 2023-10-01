import PopCard from "../components/PopCard";
import styles from "../assets/Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <PopCard />
      <PopCard />
      <PopCard />
      <PopCard />
      <PopCard />
      <PopCard />
      <PopCard />
    </div>
  );
}
