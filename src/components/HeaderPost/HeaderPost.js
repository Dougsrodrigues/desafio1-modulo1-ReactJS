import React, { Fragment } from "react";
import "./HeaderPost.scss";
const HeaderPost = props => (
  <div className="header-post">
    <img src={props.img} className="avatar" />
    <h1>{props.name}</h1>
    <small>{props.time}</small>
  </div>
);

export default HeaderPost;
