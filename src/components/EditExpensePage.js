import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

const EditExpensePage = props => {
  console.log(props);
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          // Dispatch the action to edit the expense
          // Redirect to the dashboard
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push("/");
        }}
      />
      {/* Remove expense via dispatch and then redirect to dashboard */}
      <button
        onClick={() => {
          props.dispatch(removeExpense(props.expense.id));
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

export default connect(mapStateToProps)(EditExpensePage);
