import styles from "../assets/styles/Card.module.css";
import Button from "./Button";

function Card({ title, imageName, series }) {
  return (
    <div className={styles.card}>
      <img src={imageName} className={styles.img} />
      <h2>{title}</h2>
      <p>{series}</p>
      <Button title={"ADD TO CART"} />
    </div>
  );
}

export default Card;
