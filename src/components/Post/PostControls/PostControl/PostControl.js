import React from "react";

import classes from "./PostControl.css";

const postControl = props => {
  return (
    <div className={classes.PostControl}>
      <select
        name={`${props.index}`}
        onChange={props.selectType}
        index={props.index}
        defaultValue={props.type}
      >
        <option value="title">title</option>
        <option value="subtitle">subtitle</option>
        <option value="content">content</option>
      </select>
      <h4>{props.type}</h4>
      <input type="text" name={`${props.index}`} onChange={props.editPost} />
    </div>
  );
};

export default postControl;
