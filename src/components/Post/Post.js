import React from "react";
import "./Post.scss";
import HeaderPost from "../HeaderPost/HeaderPost";

const Post = props => (
  <div className="container">
    <li>
      <HeaderPost name={props.name} time={props.time} />
      <p>{props.post}</p>
    </li>
  </div>
);

export default Post;
