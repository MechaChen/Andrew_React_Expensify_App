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
// REMOVE_EXPENSE
// SET_TEXT_FILTERS
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

store.dispatch(addExpense({ description: "Rent", amount: 100 }));
store.dispatch(addExpense({ description: "Coffee", amount: 300 }));

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
