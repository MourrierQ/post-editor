import React from "react";

import classes from "./Post.css";

const Post = props => {
  return <div className={classes.Post}>{props.children}</div>;
};

export default Post;
