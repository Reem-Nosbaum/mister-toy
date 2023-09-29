import { Link } from "react-router-dom";
import styles from "../assets/NavBar.module.css";

// eslint-disable-next-line react/prop-types
function Button({ children, to }) {
  if (to)
    return (
      <Link className={styles.button} to={to}>
        {children}
      </Link>
    );

  return <button className={styles.button}>{children}</button>;
}
export default Button;
