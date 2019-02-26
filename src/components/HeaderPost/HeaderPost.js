import React, { Fragment } from "react";
import "./HeaderPost.scss";
const HeaderPost = props => (
  <div className="header-post">
    <h1>{props.name}</h1>
    <h4>{props.time}</h4>
  </div>
);

export default HeaderPost;
