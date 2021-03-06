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

// SORT_BY_DATE
const sortByDate = () => {
  return {
    type: "SORT_BY_DATE"
  };
};

// SORT_BY_AMOUNT
const sortByAmount = () => {
  return {
    type: "SORT_BY_AMOUNT"
  };
};

// SET_START_DATE
const setStartDate = startDate => {
  return {
    type: "SET_START_DATE",
    startDate
  };
};

// SET_END_DATE
const setEndDate = endDate => {
  return {
    type: "SET_END_DATE",
    endDate
  };
};

// Expense Reducer

const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "EDIT_EXPENSE":
      return state.map(expense =>
        expense.id === action.id ? { ...state, ...action.updates } : state
      );
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
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: "amount" };
    case "SORT_BY_DATE":
      return { ...state, sortBy: "date" };
    case "SET_START_DATE":
      return { ...state, startDate: action.startDate };
    case "SET_END_DATE":
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

// timestamp (millsecond)
// 0 : January 1st 1970 (unix epoch)
// 33400, 10, -203

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;

      // figure out if expenses.description has the text variable string inside of it
      // includes
      // convert both strings to lower case
      const textMatch =
        typeof text !== "string" ||
        expense.description.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }

      // sortBy -> amount
      // put the ones with a greater amount first
    });
};

// Store creation

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(state);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 100, createdAt: -21000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 300, createdAt: -1000 })
);

// store.dispatch(removeExpense(expenseOne.expense.id));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter("ffe"));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125)); // startDate 125
// store.dispatch(setStartDate()); // startDate undefined
// store.dispatch(setEndDate(999)); // endDate 1250

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
