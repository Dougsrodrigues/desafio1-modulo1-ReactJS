import React, { Component, Fragment } from "react";

import HeaderPage from "./components/HeaderPage/HeaderPage";
import Post from "./components/Post/Post";

import "./style.scss";

export default class App extends Component {
  state = {
    names: ["Diego Schell Fernandes", "Rubia Savolksi", "Mr.Mustache"],
    times: ["há 3 min", "há 10 min", "há 20 min"],
    posts: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"
    ]
  };

  render() {
    return (
      <div>
        <HeaderPage />
        <ul className="post-list">
          {this.state.names.map(name => (
            <Post name={name} />
          ))}
          ,
          {this.state.times.map(time => (
            <Post time={time} />
          ))}
          ,
          {this.state.posts.map(post => (
            <Post post={post} />
          ))}
        </ul>
      </div>
    );
  }
}
