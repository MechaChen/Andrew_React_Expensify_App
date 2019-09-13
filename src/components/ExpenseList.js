import React from "react";
import { connect } from "react-redux";

const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    <p>{props.expenses.length}</p>
  </div>
);

// const Info = (props) => (
//     <div>
//         <h1>Info</h1>
//         <p>The info is : {props.info}</p>
//     </div>
// );

// const withAdminWarning = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             <p>This is private info. Please don't share</p>
//             <WrappedComponent {...props}/>
//         </div>
//     );
// }

// const AdminInfo = withAdminWarning(Info);

// connect(1)(2) : like the function we created on 100 tutorial
//  1. a function return the data we need from store
//  2. Inner Component

const ConnectedExpenseList = connect(state => ({
  expenses: state.expenses
}))(ExpenseList);

export default ConnectedExpenseList;
