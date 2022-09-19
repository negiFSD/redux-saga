import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getData } from "./redux/action";

function App() {
  const state = useSelector((store) => store.product);
  console.log(state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      hello
      <button onClick={() => dispatch(getData())}>sdf</button>
    </div>
  );
}

export default App;
