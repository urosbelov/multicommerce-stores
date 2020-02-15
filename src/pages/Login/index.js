import React from "react";
import "./login.css";
import { Form, Typography, Input, Button, Row, Col } from "antd";
import { connect } from "react-redux";
import {
  HANDLE_AUTHENTICATION,
  OPEN_REGISTRATION_MODAL
} from "../../actions/types";
import Register from "./Register";

const { Title } = Typography;

class HandleLogin extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.handleLogin(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row className="row">
        <Register />
        <Col className="col col-left" xs={24} md={10}>
          <div className="col-left__title">
            <Title>Dobrodošli</Title>
            <Title level={3}>Centar prodavnica</Title>
          </div>

          <Form onSubmit={this.handleSubmit} className="col-left__loginForm">
            <Form.Item>
              {getFieldDecorator("email", {
                rules: [
                  {
                    required: true,
                    message: "Molimo Vas da upisete email adresu!"
                  }
                ]
              })(<Input placeholder="Email" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  {
                    required: true,
                    message: "Molimo Vas da upisete lozinku!"
                  }
                ]
              })(<Input.Password placeholder="Lozinka" />)}
            </Form.Item>
            <Form.Item>
              <div className="col-left__buttons">
                <Button type="primary" htmlType="submit">
                  <b>Prijavite se</b>
                </Button>
                <Button
                  style={{ marginLeft: "7px" }}
                  onClick={this.props.handleRegisterModal}
                >
                  <b>Registrujte se</b>
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Col>
        <Col className="col col-right" xs={0} md={14} />
      </Row>
    );
  }
}

const Login = Form.create({ name: "login" })(HandleLogin);

function mapDispatchToProps(dispatch) {
  return {
    handleLogin: payload => dispatch({ type: HANDLE_AUTHENTICATION, payload }),
    handleRegisterModal: () => dispatch({ type: OPEN_REGISTRATION_MODAL })
  };
}

export default connect(null, mapDispatchToProps)(Login);
