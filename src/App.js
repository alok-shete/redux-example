import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, login, logOut } from "./actions";
import Count from "./components/count";

function App() {
  const isLogged = useSelector((store) => store.isLogged);
  const dispatch = useDispatch();

  const userLogin = () => {
    // api for user login
    const userDetails = {
      name: "alok",
      age: 23,
    };

    dispatch(login(userDetails));
  };


  const userLogout = () =>{
    dispatch(logOut())
  }

  return (
    <div>
      <Count />
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => userLogin()}>Login</button>
      <button onClick={() => userLogout()}>logout</button>
      {JSON.stringify(isLogged)}
    </div>
  );
}

export default App;
