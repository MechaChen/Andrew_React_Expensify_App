import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// Action Generactors

// ADD_EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => {
  return {
    type: "ADD_EXPENSE",
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  };
};
// EDIT_EXPENSE
const editExpense = (id, updates) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    updates
  };
};

// REMOVE_EXPENSE
const removeExpense = id => {
  return {
    type: "REMOVE_EXPENSE",
    id
  };
};

// SET_TEXT_FILTER
const setTextFilter = (text = "") => {
  return {
    type: "SET_TEXT_FILTER",
    text
  };
};

// SORT_BY_RENT
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expense Reducer

const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return { ...expense, ...action.updates };
        } else {
          return expense;
        }
      });
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

// Filter Reducer
// text => '', sortBy => 'date', startDate => undefined, endDate => undefined

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    default:
      return state;
  }
};

// Store creation

const store = createStore(
  combineReducers({
    expense: expenseReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => console.log(store.getState()));

const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 100 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 300 })
);

store.dispatch(removeExpense(expenseOne.expense.id));
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter("rent"));
store.dispatch(setTextFilter());

const demoState = {
  expenses: [
    {
      id: "asldfzcmvowie",
      description: "January Rent",
      notes: "This was final payment for that address",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", // rent or amount
    startDate: undefined,
    endDate: undefined
  }
};

// const user = { name: "Jen", age: 24 };
// console.log({ ...user, location: "Philadelphia", age: 27 });
// // {name: "Jen", age: 27, location: "Philadelphia"}

// console.log({ age: 27, ...user, location: "Philadelphia" });
// {name: "Jen", age: 24, location: "Philadelphia"}
