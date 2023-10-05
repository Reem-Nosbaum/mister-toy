import { useDispatch, useSelector } from "react-redux";
import styles from "../assets/Home.module.css";
import { selectPops } from "../store/pop/popSelectors";
import { useEffect } from "react";
import { loadPops } from "../store/pop/popActions";

export default function Home() {
  const pops = useSelector(selectPops);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPops());
    console.log("reem");
  }, []);

  return (
    <>
      {pops.map((pop) => (
        <div key={pop.id} className={styles.h1}>
          {pop.title}
        </div>
      ))}
    </>
  );
}
