import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 2
    };
  } else {
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

// I'd like to increment the count
// I'd like to reset the count to zero

console.log(store.getState());
