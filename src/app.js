import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import configureStore from "./store/configureStore";
import "reset.css/reset.css";
import "./styles/style.scss";

const store = configureStore();

store.subscribe(() => console.log(store.getState()));

// addExpense -> Water bill
store.dispatch(addExpense({ description: "Water bill", amount: 500 }));

// addExpense -> Gas bill
store.dispatch(addExpense({ description: "Gas bill", amount: 100 }));

// setTextFilter -> bill (2 items) -> water (1 item)
store.dispatch(setTextFilter("water"));

// getVisibleExpenses -> print visibles ones to screens
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById("app"));
