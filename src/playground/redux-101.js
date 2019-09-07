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

// get call every single time the store changes
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "INCREMENT"
});

store.dispatch({
  type: "INCREMENT"
});

store.dispatch({
  type: "RESET"
});

store.dispatch({
  type: "DECREMENT"
});
