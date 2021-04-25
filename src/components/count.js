import { useSelector } from "react-redux";

export default function Count() {
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <h2>{counter}</h2>
    </div>
  );
}
