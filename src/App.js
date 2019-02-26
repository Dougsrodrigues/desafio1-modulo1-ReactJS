import React, { Component, Fragment } from "react";

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
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        id: 2,
        name: "Rubia Savolksi",
        time: "há 10 min",
        post:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
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
