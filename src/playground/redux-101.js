import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 2
      };
    case "DECREMENT":
      return {
        count: state.count - 2
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
});

console.log(store.getState());

// Actions - nothing more than an object that gets sent to the store
//  describe the types of action we want to take
//  ex: walk, stop_walking, sit, work, stop_working

store.dispatch({
  type: "INCREMENT"
});

store.dispatch({
  type: "INCREMENT"
});

// RESET - set the count equal to zero
store.dispatch({
  type: "RESET"
});

store.dispatch({
  type: "DECREMENT"
});

// I'd like to increment the count
// I'd like to reset the count to zero

console.log(store.getState());
