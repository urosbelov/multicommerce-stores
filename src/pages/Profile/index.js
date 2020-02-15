import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Row, Col, Menu, Button } from "antd";
import history from "../../utils/history";
import ProfileMedia from "./Media";
import ProfileReviews from "./Reviews";

class Profile extends Component {
  redirectToEdit() {
    history.push("/profile/edit");
  }
  redirectToMedia() {
    history.push("/profile/media");
  }
  redirectToReviews() {
    history.push("/profile/reviews");
  }
  redirectToDashboard() {
    history.push("/dashboard");
  }
  render() {
    return (
      <Row
        className="wrapper"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Col span={7}>
          <Menu
            defaultSelectedKeys="1"
            className="menu"
            style={{ width: 256, border: 0 }}
            mode="vertical"
          >
            <Menu.Item key="1" onClick={this.redirectToMedia}>
              <b>Fotografija</b>
            </Menu.Item>
            <Menu.Item key="2" onClick={this.redirectToReviews}>
              <b>Ocene</b>
            </Menu.Item>
            <Menu.Item key="3">
              <b>Reference</b>
            </Menu.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 16
              }}
            >
              <Button block onClick={this.redirectToDashboard}>
                <b>Pregledajte profil</b>
              </Button>
            </div>
          </Menu>
        </Col>
        <Col span={17}>
          <Switch>
            <Route path="/profile/media" component={ProfileMedia} />
            <Route path="/profile/reviews" component={ProfileReviews} />
          </Switch>
        </Col>
      </Row>
    );
  }
}

export default Profile;
