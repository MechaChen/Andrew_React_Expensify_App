import React from "react";
import { connect } from "react-redux";
import { setTextFilter } from "../actions/filters";

const ExpenseListFilters = props => (
  <div>
    <input
      type="text"
      value={props.text}
      onChange={e => {
        props.dispatch(setTextFilter(e.target.value));
      }}
    />
    <selection>
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </selection>
  </div>
);

const mapStateToProps = state => ({
  text: state.filters.text
});

export default connect(mapStateToProps)(ExpenseListFilters);
