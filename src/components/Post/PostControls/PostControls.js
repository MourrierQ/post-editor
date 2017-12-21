import React from "react";

import PostControl from "./PostControl/PostControl";

import classes from "./PostControls.css";

const postControls = props => {
  return (
    <div className={classes.PostControls}>
      <PostControl
        selectType={props.selectType}
        editPost={props.editPost}
        type={props.type}
      />
      <button onClick={props.addEditPost}>+</button>
    </div>
  );
};

export default postControls;
