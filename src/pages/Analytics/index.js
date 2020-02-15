import React, { Component } from "react";
import { Result } from "antd";
import { Helmet } from "react-helmet";

class Analytics extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Kontrolna tabla</title>
          <meta
            name="description"
            content="This is a different description for this route."
          />
        </Helmet>
        <Result title="Analytics" subTitle="To do.." />
      </div>
    );
  }
}

export default Analytics;
