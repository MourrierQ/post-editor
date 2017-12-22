import React from "react";

import classes from "./Header.css";

const header = props => {
  return (
    <div className={classes.Header}>
      <h3>CMS-React</h3>
      <ul>
        <li>Add</li>
        <li>Delete</li>
        <li>Edit</li>
      </ul>
    </div>
  );
};

export default header;
