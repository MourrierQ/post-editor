import React from "react";

import classes from "./PostControl.css";

import TextareaAutosize from "react-autosize-textarea";

const postControl = props => {
  const style = {
    width: "80%",
    marginTop: "20px",
    outLine: "none",
    borderRadius: "5px"
  };
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
      <a name={`${props.index}`} onClick={props.remove}>
        X
      </a>
      <h4>{props.type}</h4>
      <TextareaAutosize
        style={style}
        type="text"
        name={`${props.index}`}
        onChange={props.editPost}
      />
    </div>
  );
};

export default postControl;
