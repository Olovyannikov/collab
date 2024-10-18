import { createEvent, createStore, sample } from "effector";

export const $counter = createStore(0);
export const counterIncremented = createEvent();

sample({
  clock: counterIncremented,
  source: $counter,
  fn: (counter) => {
    return counter + 1
  },
  target: $counter
})