import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout, Icon, Menu } from "antd";
import { Link } from "react-router-dom";
import "./sidebar.css";

const { Sider } = Layout;

class Sidebar extends Component {
  render() {
    return (
      <Sider
        width={190}
        trigger={null}
        collapsible
        collapsed={this.props.sider}
      >
        <Menu mode="inline">
          <div className="logo" />
          <Menu.Item key="1">
            <Icon type="line-chart" />
            <span>
              <b>Kontrolna tabla</b>
            </span>
            <Link to="/analytics" />
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="shopping-cart" />
            <span>
              <b>Porudzbine</b>
            </span>
            <Link to="/orders" />
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="container" />
            <span>
              <b>Proizvodi</b>
            </span>
            <Link to="/products" />
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
function mapStateToProps(state) {
  return {
    sider: state.sider
  };
}

export default connect(mapStateToProps, null)(Sidebar);
