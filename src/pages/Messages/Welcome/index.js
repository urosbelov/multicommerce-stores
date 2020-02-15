import React, { Component } from "react";
import { Empty } from "antd";

class WelcomeMessages extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%"
        }}
      >
        <Empty
          description={
            <b>
              Da biste pročitali poruke molimo Vas da kliknete na jednu od
              konekcija.
            </b>
          }
        />
      </div>
    );
  }
}

export default WelcomeMessages;
