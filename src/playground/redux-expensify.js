import { createStore, combineReducers } from "redux";

// ADD_EXPENSE
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
    default:
      return state;
  }
};

// Store creation

const store = createStore(
  combineReducers({
    expense: expenseReducer
  })
);

console.log(store.getState());

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
