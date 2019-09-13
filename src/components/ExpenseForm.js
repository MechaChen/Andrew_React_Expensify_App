import React from "react";

// setup note state
// setup onChange and value for textarea

export default class ExpenseForm extends React.Component {
  state = {
    description: "",
    amount: 0,
    note: ""
  };
  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = e => {
    // const note = e.target.value;
    // this.setState(() => ({ note }));
    e.persist();
    this.setState(() => ({ note: e.target.value }));
  };
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input type="text" placeholder="Amount" />
          <textarea
            placeholder="Add a note for your expense(optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>
        </form>
      </div>
    );
  }
}
