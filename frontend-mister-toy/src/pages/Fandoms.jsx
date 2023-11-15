import { useDispatch, useSelector } from "react-redux";
import { popList } from "../store/popSlice";

function Fandoms() {
  const pops = useSelector((state) => state.pop.value);
  const dispatch = useDispatch();

  return (
    <div className="flex">
      <button onClick={() => dispatch(popList())}>click</button>
    </div>
  );
}

export default Fandoms;
