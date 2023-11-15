import { useDispatch } from "react-redux";
import { popList } from "../store/popSlice";

function Fandoms() {
  const dispatch = useDispatch();

  return (
    <div className="flex">
      <button onClick={() => dispatch(popList())}>click</button>
    </div>
  );
}

export default Fandoms;
