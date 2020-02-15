import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Card, Row } from "antd";
import WelcomeMessages from "./Welcome";
import Connections from "./Connections";
import Messenger from "./Messenger";
import "./messages.css";

class Messages extends Component {
  componentDidMount() {}

  render() {
    return (
      <Card className="card" bodyStyle={{ padding: 0 }}>
        <Row className="row" type="flex" justify="center" align="bottom">
          <Col
            className="col col-connections"
            xs={{ order: 2 }}
            md={{ order: 1, span: 4 }}
          >
            <Connections />
          </Col>
          <Col
            className="col col-messenger"
            xs={{ order: 1 }}
            md={{ order: 2, span: 20 }}
          >
            {this.props.consumer ? <Messenger /> : <WelcomeMessages />}
          </Col>
        </Row>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    consumer: state.messages.consumer
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
