import React, { Component } from "react";
import "./Consumer.css";

export default class Consumer extends Component {
  render() {
    return (
      <div className="chat-bubble">
        <span className="chat-message">
          <b>{this.props.consumer}</b>
        </span>
      </div>
    );
  }
}
