import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

// Refactor EditExpensePage to be a class based component
// Setup mapDispatchToProp editExpense and removeExpense
export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }
  onRemove = () => {
    this.props.removeExpense(this.props.expense.id);
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
      <ExpenseForm
        expense={this.props.expense}
        onSubmit={this.onSubmit}
      />
      <button
        onClick={this.onRemove}
      >
        Remove
      </button>
    </div>
    );
  }
}

// should render EditExpensePage
// snapshot

// should handle editExpense
// spies

// should handle removeExpense
// spies


const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (id) => dispatch(removeExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
