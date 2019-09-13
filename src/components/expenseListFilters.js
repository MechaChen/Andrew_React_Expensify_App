import React from "react";
import { connect } from "react-redux";

const ExpenseListFilters = props => (
  <div>
    <input type="text" defaultValue={props.text} />
  </div>
);

const mapStateToProps = state => ({
  text: state.filters.text
});

export default connect(mapStateToProps)(ExpenseListFilters);
