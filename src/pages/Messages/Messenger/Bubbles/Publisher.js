import React, { Component } from "react";
import "./Consumer.css";

export default class Publisher extends Component {
  render() {
    return (
      <div className="chat-bubble mine">
        <span className="chat-message">
          <b>{this.props.publisher}</b>
        </span>
      </div>
    );
  }
}
