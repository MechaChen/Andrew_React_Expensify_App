import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import getExpensesTotal from './selectors/expenses-total';
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "react-dates/lib/css/_datepicker.css";
import "./styles/style.scss";
import firebase from './firebase/firebase';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
