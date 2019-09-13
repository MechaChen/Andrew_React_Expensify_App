import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpense from "../selectors/expenses";

const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map(expense => (
      <ExpenseListItem key={expense.id} {...expense} />
    ))}
  </div>
);

// connect(1)(2) : like the function we created on 100 tutorial
//  1. a function return the data we need from store
//  2. Inner Component

const mapStateToProps = state => ({
  expenses: selectExpense(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);

// export default ConnectedExpenseList;
