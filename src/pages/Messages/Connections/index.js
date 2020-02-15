import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Button, Avatar, Icon } from "antd";
import NewMessageModal from "../NewMessage";
import { NEW_MESSAGE_MODAL_OPEN, SELECT_MESSAGE } from "../../../actions/types";

class Connections extends Component {
  handleMenu = e => {
    const data = {
      key: e.key,
      consumer: e.item.props.consumer
    };

    this.props.selected(data);
  };
  render() {
    let friends = [];

    if (this.props.connections) {
      friends = this.props.connections.map((connection, index) => {
        return (
          <Menu.Item key={connection._id} consumer={connection.consumer._id}>
            <Avatar shape="square">
              <Icon type="user" style={{ margin: 0 }} />
            </Avatar>
            <span style={{ marginLeft: 16 }}>{connection.consumer.name}</span>
          </Menu.Item>
        );
      });
    }

    return (
      <Menu
        style={{
          height: "100%",
          paddingTop: 18,
          paddingBottom: 18
        }}
        mode="inline"
        onClick={this.handleMenu}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 18
          }}
        >
          <Button type="primary" onClick={this.props.newMessageModalOpen}>
            <b>Nova poruka</b>
          </Button>
          <NewMessageModal />
        </div>

        {friends}
      </Menu>
    );
  }
}

function mapStateToProps(state) {
  return {
    connections: state.connections
  };
}

function mapDispatchToProps(dispatch) {
  return {
    newMessageModalOpen: () => dispatch({ type: NEW_MESSAGE_MODAL_OPEN }),
    selected: payload => dispatch({ type: SELECT_MESSAGE, payload })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Connections);
