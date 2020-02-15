import React from "react";
import { Route, Link } from "react-router-dom";
import "./basicLayout.css";
import { connect } from "react-redux";
import SideDrawer from "./SiderDrawer/SideDrawer";
import Sidebar from "./Sidebar/Sidebar";
import Dropdown from "./NavBar/Dropdown";
import { Layout, Icon, Badge } from "antd";
import { SIDER_OPEN } from "../actions/types";

const { Header, Content } = Layout;

class BasicLayout extends React.Component {
  render() {
    const { component: Component, isLogged, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={matchProps => (
          <Layout className="layout">
            {this.props.isMobile ? (
              <SideDrawer
                collapsed={this.props.sider}
                handleClose={this.props.siderOpen}
              />
            ) : (
              <Sidebar collapsed={this.props.sider} />
            )}

            <Layout>
              <Header className="header">
                <Icon
                  className="trigger"
                  type={this.props.sider ? "menu-unfold" : "menu-fold"}
                  onClick={this.props.siderOpen}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row"
                  }}
                >
                  <Link to="/messages">
                    <Badge dot>
                      <Icon type="notification" />
                    </Badge>
                  </Link>
                  <Dropdown />
                </div>
              </Header>
              <Content className="content">
                <Component {...matchProps} />
              </Content>
            </Layout>
          </Layout>
        )}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    isLogged: state.auth.isLogged,
    isMobile: state.isMobile.lessThan.small,
    sider: state.sider,
    user: state.auth.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    siderOpen: () => dispatch({ type: SIDER_OPEN })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicLayout);
