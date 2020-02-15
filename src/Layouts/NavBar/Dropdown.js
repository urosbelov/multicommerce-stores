import React from "react";
import { Dropdown as Dropdown1, Avatar, Menu } from "antd";
import { connect } from "react-redux";
import "./dropdown.css";
import { HANDLE_LOGOUT } from "../../actions/types";
import history from "../../utils/history";

class Dropdown extends React.Component {
  handleLogout = () => {
    this.props.logout();
  };
  redirectToAccount() {
    history.push("/account");
  }
  redirectToProfile() {
    history.push("/profile/edit");
  }

  menu = (
    <Menu>
      <Menu.Item onClick={this.redirectToProfile} key="setting:1">
        <b>Profil </b>
      </Menu.Item>
      <Menu.Item onClick={this.redirectToAccount} key="setting:2">
        <b>Nalog</b>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="setting:3">
        <b>Pozovite prijatelje</b>
      </Menu.Item>
      <Menu.Item onClick={this.handleLogout} key="setting:4">
        <b>Odjavite se</b>
      </Menu.Item>
    </Menu>
  );
  render() {
    return (
      <Dropdown1 className="dropdown" overlay={this.menu} trigger={["hover"]}>
        <div>
          <Avatar className="avatar" icon="user" />
          <span>
            <b>{this.props.user.name}</b>
          </span>
        </div>
      </Dropdown1>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch({ type: HANDLE_LOGOUT })
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
