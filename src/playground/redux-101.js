import { createStore } from "redux";

// Action generators - functions that return objects
//  advantage:
//    1. avoid typo
//    2. prevent duplicate code

const incrementCount = (payload = {}) => ({
  type: "INCREMENT",
  incrementBy: typeof payload.incrementBy === "number" ? payload.incrementBy : 1
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case "SET":
      return {
        count: action.count
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
});

// get call every single time the store changes
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });

store.dispatch(incrementCount(5));

// store.dispatch({
//   type: "INCREMENT"
// });

store.dispatch(incrementCount());

store.dispatch({
  type: "RESET"
});

store.dispatch({
  type: "DECREMENT",
  decrementBy: 10
});

store.dispatch({
  type: "DECREMENT"
});

store.dispatch({
  type: "SET",
  count: 101
});
