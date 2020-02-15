import React, { Component } from "react";
import { Modal, Form, Input, Button } from "antd";
import { connect } from "react-redux";
import {
  CLOSE_REGISTRATION_MODAL,
  HANDLE_REGISTRATION
} from "../../../actions/types";

class HandleRegister extends Component {
  state = {
    confirmDirty: false
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.handleRegister(values);
      }
    });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Vase lozinke se ne podudaraju!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["passwordRepeat"], { force: true });
    }
    callback();
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Modal
        title="Registracija"
        visible={this.props.registerModal}
        onCancel={this.props.closeRegisterModal}
        footer={[
          <Button key="register" type="primary" onClick={this.handleSubmit}>
            Registrujte se
          </Button>
        ]}
      >
        <Form onSubmit={this.handleSubmit} className="loginForm">
          <Form.Item>
            {getFieldDecorator("name", {
              rules: [
                {
                  required: true,
                  message: "Molimo Vas da upisete naziv radnje!"
                }
              ]
            })(<Input placeholder="Naziv radnje" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "Molimo Vas da ispravite email adresu!"
                },
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
                },
                {
                  validator: this.validateToNextPassword
                }
              ]
            })(<Input.Password placeholder="Lozinka" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("passwordRepeat", {
              rules: [
                {
                  required: true,
                  message: "Molimo Vas da ponovo upisete lozinku!"
                },
                {
                  validator: this.compareToFirstPassword
                }
              ]
            })(<Input.Password placeholder="Potvrdite lozinku" />)}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

const Register = Form.create({ name: "register" })(HandleRegister);

function mapStateToProps(state) {
  return {
    registerModal: state.registration.modal
  };
}

function mapDispatchToProps(dispatch) {
  return {
    closeRegisterModal: () => dispatch({ type: CLOSE_REGISTRATION_MODAL }),
    handleRegister: payload => dispatch({ type: HANDLE_REGISTRATION, payload })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
