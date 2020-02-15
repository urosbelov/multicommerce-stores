import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./sideDrawer.css";
import { SIDER_OPEN } from "../../actions/types";

import { Layout, Drawer, Icon, Menu } from "antd";

class SideDrawer extends Component {
  render() {
    return (
      <div>
        <Drawer
          onClose={this.props.openSider}
          bodyStyle={{ padding: 0 }}
          width="190"
          placement="left"
          closable={false}
          visible={!this.props.sider}
        >
          <Layout className="layout">
            <div className="logo" />
            <Menu mode="inline">
              <Menu.Item key="1">
                <Link to="/dashboard">
                  <Icon type="line-chart" />
                  <span>Kontrolna tabla</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="2">
                <Link to="/orders">
                  <Icon type="shopping-cart" />
                  <span>Porudzbine</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/products">
                  <Icon type="container" />
                  <span>Proizvodi</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Layout>
        </Drawer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sider: state.sider
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openSider: () => dispatch({ type: SIDER_OPEN })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);
