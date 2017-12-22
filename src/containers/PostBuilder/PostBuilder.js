import React, { Component } from "react";

import PostControls from "../../components/Post/PostControls/PostControls";
import Post from "../../components/Post/Post";

import classes from "./PostBuilder.css";

export class PostBuilder extends Component {
  state = {
    postEdits: [{ content: "", type: "title", key: 0 }],
    postPreviewContent: [],
    postEditsType: {
      title: 1,
      subtitle: 0,
      content: 0
    },
    selected: "title",
    indexEditPosts: 0
  };

  editHandler = event => {
    const postEdits = [...this.state.postEdits];
    const index = parseInt(event.target.name, 10);
    console.log(event.target.value);
    postEdits[index].content = event.target.value;

    console.log(postEdits[index.content]);
    this.setState({ postEdits });
  };

  selectTypeHandler = event => {
    const selected = event.target.value;
    const index = parseInt(event.target.name, 10);
    let postEdits = [...this.state.postEdits];
    console.log(index);
    postEdits[index].type = selected;
    this.setState({ postEdits });
  };

  addPostEditHandler = () => {
    let selected;
    switch (this.state.selected) {
      case "subtitle":
        selected = "content";
        break;
      default:
        selected = "subtitle";
    }

    const postEditsType = { ...this.state.postEditsType };
    postEditsType[selected] = postEditsType[selected]++;

    const indexEditPosts = this.state.indexEditPosts + 1;

    const editPost = {
      [selected]: "",
      type: selected,
      key: indexEditPosts
    };

    const postEdits = [...this.state.postEdits];
    postEdits.push(editPost);

    this.setState({ postEditsType, selected, indexEditPosts, postEdits });
  };

  removePostEditHandler = event => {
    const postEdits = [...this.state.postEdits];
    const index = parseInt(event.target.name, 10);
    postEdits[index] = null;
    this.setState({ postEdits });
  };

  render() {
    const copyPostEdits = [...this.state.postEdits];

    const postPreview = copyPostEdits.map(element => {
      if (element)
        switch (element.type) {
          case "title":
            return <h1 key={element.key}>{element.content}</h1>;

          case "subtitle":
            return <h3 key={element.key}>{element.content}</h3>;

          case "content":
            return <p key={element.key}>{element.content}</p>;

          default:
            return null;
        }
      return null;
    });

    return (
      <div className={classes.PostBuilder}>
        <PostControls
          editPost={this.editHandler}
          selectType={this.selectTypeHandler}
          addEditPost={this.addPostEditHandler}
          postEdits={this.state.postEdits}
          remove={this.removePostEditHandler}
        />
        <Post>{postPreview}</Post>
      </div>
    );
  }
}

export default PostBuilder;
