import React from "react";

const EditExpensePage = props => {
  console.log(props);
  // Object{match: Object, location: Object, history: Object, ...}
  //   history : can let us manipulate history(where the user is), ex: redirect
  //   location : contain the infomation of current URL
  //   match :
  return <div>Editing the expense with id of {props.match.params.id}</div>;
};

export default EditExpensePage;
