import React from "react";

import classes from "./PostControl.css";

const postControl = props => {
  console.log("type :" + props.type);
  return (
    <div className={classes.PostControl}>
      <select name="type" id="" onChange={props.selectType}>
        <option value="title">title</option>
        <option value="subtitle">subtitle</option>
        <option value="content">content</option>
      </select>
      <h4>{props.type}</h4>
      <input type="text" name={props.type} onChange={props.editPost} />
    </div>
  );
};

export default postControl;
