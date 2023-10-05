import styles from "../assets/styles/Button.module.css";

function Button({ title }) {
  return <div className={styles.btn}>{title}</div>;
}
export default Button;
