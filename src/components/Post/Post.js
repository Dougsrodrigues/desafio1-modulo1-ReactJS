import React from "react";
import "./Post.scss";
import HeaderPost from "../HeaderPost/HeaderPost";

const Post = props => (
  <div className="container">
    <li>
      <HeaderPost name={props.post.name} time={props.post.time} />
      <p>{props.post.post}</p>
    </li>
  </div>
);

export default Post;
