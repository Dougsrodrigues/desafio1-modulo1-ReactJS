import React, { Component, Fragment } from "react";
const path = require("path");
import HeaderPage from "./components/HeaderPage/HeaderPage";
import Post from "./components/Post/Post";

import "./style.scss";

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: "Diego Schell Fernandes",
        time: "há 3 min",
        post:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: path.resolve(__dirname, "..", "public", "images")
      },
      {
        id: 2,
        name: "Rubia Savolksi",
        time: "há 10 min",
        post:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: "../public/images/girl.png"
      }
    ]
  };

  render() {
    return (
      <div>
        <HeaderPage />
        <ul>
          {this.state.posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </ul>
      </div>
    );
  }
}
