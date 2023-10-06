import styles from "../assets/styles/Card.module.css";
import Button from "./Button";

function Card({ title, imageName, price }) {
  return (
    <div className={styles.card}>
      <img src={imageName} className={styles.img} />
      <h2>{title}</h2>
      <p className={styles.p}>ONLY {price}</p>
      <Button title={"ADD TO CART"} />
    </div>
  );
}

export default Card;
