import React from "react";

import PostControl from "./PostControl/PostControl";

import classes from "./PostControls.css";

const postControls = props => {
  const postControls = props.postEdits.map(postEdit => {
    return (
      <PostControl
        selectType={props.selectType}
        editPost={props.editPost}
        type={postEdit.type}
        key={postEdit.key}
        index={postEdit.key}
        content={postEdit.content}
      />
    );
  });

  return (
    <div className={classes.PostControls}>
      {postControls}
      <button onClick={props.addEditPost}>+</button>
    </div>
  );
};

export default postControls;
