import { useDispatch, useSelector } from "react-redux";
import styles from "../assets/styles/Home.module.css";
import { selectPops } from "../store/pop/popSelectors";
import { useEffect } from "react";
import { loadPops } from "../store/pop/popActions";
import Card from "../components/Card";

export default function Home() {
  const pops = useSelector(selectPops);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!pops.length) dispatch(loadPops());
  }, []);

  return (
    <>
      <div className={styles.home}>
        {pops.map((pop) => (
          <Card
            key={pop.id}
            title={pop.title}
            imageName={pop.imageName}
            series={pop.series}
          />
        ))}
      </div>
    </>
  );
}
