// Export a stateless functional Component
// decription, amount, createdAt

import React from "react";

const ExpenseListItem = props => (
  <div>
    <p>Description: {props.description}</p>
    <p>Amount: {props.amount}</p>
    <p>Created At: {props.createdAt}</p>
  </div>
);

export default ExpenseListItem;
