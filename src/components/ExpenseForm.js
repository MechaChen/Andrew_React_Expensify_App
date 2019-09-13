import React from "react";
import { SingleDatePicker } from "react-dates";
import moment from "moment";
import "react-dates/lib/css/_datepicker.css";

// setup note state
// setup onChange and value for textarea

export default class ExpenseForm extends React.Component {
  state = {
    description: "",
    amount: "",
    note: "",
    createdAt: moment(),
    calendarFocused: false,
    error: null
  };
  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || /^\d+(\.\d{0,2})?$/.test(amount)) {
      this.setState(() => ({ amount }));
    }
  };
  onNoteChange = e => {
    e.persist();
    this.setState(() => ({ note: e.target.value }));
  };
  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = e => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      // Set error state equal to 'Please provide description and amount.'
      this.setState(() => ({
        error: "Please provide description and amount."
      }));
    } else {
      // Clear the error
      this.setState(() => ({ error: null }));
      console.log("submitted");
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your expense(optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}
