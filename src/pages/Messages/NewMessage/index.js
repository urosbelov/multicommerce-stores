import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Form, Select, Input } from "antd";
import { NEW_MESSAGE_MODAL_CLOSE, SEND_MESSAGE } from "../../../actions/types";

const { Option } = Select;

class NewMessageModal extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const message = { consumer: values.consumer, message: values.message };
        console.log("Send Message: ", message);
        // this.props.sendMessage(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const options = this.props.connections.map((connection, index) => {
      return (
        <Option key={connection._id} value={connection.consumer._id}>
          {connection.consumer.name}
        </Option>
      );
    });
    return (
      <Modal
        title="Nova poruka"
        visible={this.props.modal}
        onCancel={this.props.newMessageModalClose}
        onOk={this.handleSubmit}
        okText="Posaljite"
        cancelText="Poništite"
      >
        <Form onSubmit={this.handleSubmit} className="loginForm">
          <Form.Item>
            {getFieldDecorator("consumer", {
              rules: [
                {
                  required: true,
                  message: "Molimo Vas da izaberete primaoca!"
                }
              ]
            })(<Select>{options}</Select>)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("message", {
              rules: [
                {
                  required: true,
                  message: "Molimo Vas da upišete poruku."
                }
              ]
            })(
              <Input.TextArea
                autoSize={{ minRows: 4, maxRows: 4 }}
                rows={2}
                placeholder="Tekst poruke..."
              />
            )}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

const NewMessage = Form.create({ name: "register" })(NewMessageModal);

function mapStateToProps(state) {
  return {
    modal: state.messages.modal,
    connections: state.connections
  };
}

function mapDispatchToProps(dispatch) {
  return {
    newMessageModalClose: () => dispatch({ type: NEW_MESSAGE_MODAL_CLOSE }),
    sendMessage: payload => dispatch({ type: SEND_MESSAGE, payload })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMessage);
