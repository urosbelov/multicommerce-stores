import React, { Component } from "react";
import { Route, Redirect, Link, Switch } from "react-router-dom";
import { Menu, Row, Col } from "antd";
import "./account.css";
import AccountNotifications from "./Notifications";
import ProfileEdit from "../Profile/Edit";
import AccountSettings from "./Settings";
import AccountSecurity from "./Security";

class Account extends Component {
  render() {
    if (this.props.location.pathname === "/account") {
      return <Redirect to="/account/settings" />;
    }
    return (
      <Row
        className="wrapper"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Col span={6}>
          <Menu
            defaultSelectedKeys="1"
            style={{ width: 256, border: 0 }}
            mode="vertical"
          >
            <Menu.Item key="1">
              <span>
                <b>Obavestenja</b>
              </span>
              <Link to="/account/notifications" />
            </Menu.Item>
            <Menu.Item key="2">
              <span>
                <b>Informacije</b>
              </span>
              <Link to="/account/informations" />
            </Menu.Item>

            <Menu.Item key="3">
              <span>
                <b>Sigurnost</b>
              </span>
              <Link to="/account/security" />
            </Menu.Item>
            <Menu.Item key="4">
              <span>
                <b>Podesavanja</b>
              </span>
              <Link to="/account/settings" />
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={18}>
          <Switch>
            <Route
              path="/account/notifications"
              component={AccountNotifications}
            />
            <Route path="/account/informations" component={ProfileEdit} />
            <Route path="/account/security" component={AccountSecurity} />
            <Route path="/account/settings" component={AccountSettings} />
            <Redirect to="/404" />
          </Switch>
        </Col>
      </Row>
    );
  }
}

export default Account;
