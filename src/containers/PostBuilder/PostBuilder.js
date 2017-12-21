import React, { Component } from "react";

import PostControls from "../../components/Post/PostControls/PostControls";
import Post from "../../components/Post/Post";

import classes from "./PostBuilder.css";

export class PostBuilder extends Component {
  state = {
    postEdits: [{ title: "Hello" }, { subtitle: "world" }, { content: "!!!" }],
    selected: "title"
  };

  editHandler = event => {
    const postEdits = [...this.state.postEdits];
    const indexes = postEdits.map(postEdit => {
      return Object.keys(postEdit);
    });
    const index = indexes.findIndex(element => {
      console.log("Element: " + element + " selected: " + this.state.selected);
      return element == this.state.selected;
    });

    postEdits[index] = { [this.state.selected]: event.target.value };
    console.log("Index: " + index);
    this.setState({ postEdits });
  };

  selectTypeHandler = event => {
    const selected = event.target.value;
    this.setState({ selected });
  };

  render() {
    const copyPostEdits = [...this.state.postEdits];
    let index = 0;
    console.log(this.state.selected);

    const postTitle = copyPostEdits.map(postEdit => {
      index++;
      return <h1 key={index}>{postEdit.title}</h1>;
    });

    const postSubtitle = copyPostEdits.map(postEdit => {
      index++;
      return <h3 key={index}>{postEdit.subtitle}</h3>;
    });

    const postContent = copyPostEdits.map(postEdit => {
      index++;
      return <p key={index}>{postEdit.content}</p>;
    });

    return (
      <div className={classes.PostBuilder}>
        <PostControls
          editPost={this.editHandler}
          selectType={this.selectTypeHandler}
          type={this.state.selected}
          addEditPost={this.addpostEditHandler}
        />
        <Post>
          {postTitle}
          {postSubtitle}
          {postContent}
        </Post>
      </div>
    );
  }
}

export default PostBuilder;
