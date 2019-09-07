import { createStore } from "redux";

// Action generators - functions that return objects
//  advantage:
//    1. avoid typo
//    2. prevent duplicate code

// if argument not an object, default wil be an empty object
// if argument is an object but not including incrementBy, default will give an property incrementBy and set it to 1
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
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

store.dispatch(incrementCount({ incrementBy: 5 }));

// store.dispatch({
//   type: "INCREMENT"
// });

store.dispatch(incrementCount());

store.dispatch({
  type: "RESET"
});

// store.dispatch({
//     type: "DECREMENT"
// });
store.dispatch(decrementCount());

// store.dispatch({
//   type: "DECREMENT",
//   decrementBy: 10
// });
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch({
  type: "SET",
  count: 101
});
