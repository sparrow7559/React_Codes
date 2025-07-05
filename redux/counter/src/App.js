import { useSelector, useDispatch } from "react-redux";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "INC" });
  };

  const decrement = () => {
    dispatch({ type: "DEC" });
  };

  const addBy = () => {
    dispatch({ type: "ADD", payload: 10 });
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={addBy}>Add Value by 10</button>
    </div>
  );
}

export default App;
