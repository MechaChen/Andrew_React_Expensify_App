// Higher Order Component (HOC) - A Component (HOC) that renders another component
// Purpose:
//  1. Resue Code
//  2. Render hijacking
//  3. Prop manipulation
//  4. Abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      {/* use the Spread Operator to spread out props */}
      {/* {} in here is using Javascript, not an object */}
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

ReactDOM.render(
  <AdminInfo isAdmin={false} info="There are the details" />,
  document.getElementById("app")
);