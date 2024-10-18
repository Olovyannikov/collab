import { useUnit } from "effector-react";
import { $counter, counterIncremented } from "./model";

export function Counter() {
  const [count, increment] = useUnit([$counter, counterIncremented]);

  return (
    <button type="button" onClick={increment}>
      Counter {count}
    </button>
  );
}
