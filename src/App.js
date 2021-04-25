import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, login } from "./actions";
import Count from "./components/count";

function App() {
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      <Count />
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(login())}>Login</button>
      {isLogged ? <h3>You are login in</h3> : ""}
    </div>
  );
}

export default App;
