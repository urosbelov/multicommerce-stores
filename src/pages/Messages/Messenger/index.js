import React, { Component } from "react";
import { connect } from "react-redux";
import { Empty, Divider, Form, Input, Button, Row, Col } from "antd";
import { SEND_MESSAGE, NEW_MESSAGE } from "../../../actions/types";
import Bubble from "./Bubbles/Bubble";
import "./messenger.css";

class MessengerForm extends Component {
  componentDidUpdate(props) {
    console.log("Update Props: ", props);
    this.scrollToBottom();
  }
  scrollToBottom() {
    const scrollHeight = this.chatBox.scrollHeight;
    const height = this.chatBox.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.chatBox.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }
  handleSubmit = e => {
    e.preventDefault();
    const { resetFields } = this.props.form;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
        const data = {
          message: values.message,
          consumer: this.props.consumer._id,
          publisher: this.props.user,
          connection: this.props.connection
        };
        console.log("To send: ", data);
        this.props.sendMessage(data);
        this.props.newMessage({
          message: values.message,
          consumer: this.props.consumer._id,
          publisher: this.props.user,
          connection: this.props.connection
        });
        resetFields();
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const messages = this.props.messages.map((message, index) => {
      return (
        <Bubble
          index={index}
          key={index}
          user={this.props.user}
          message={message.message}
          publisher={message.publisher}
        />
      );
    });
    return (
      <div className="card-messenger">
        <div className="card__title">
          <b>{this.props.consumer.name}</b>
        </div>
        <Divider className="card__divider" />
        <div
          className="card__chat-box"
          ref={bubble => {
            this.chatBox = bubble;
          }}
        >
          {this.props.messages.length > 0 ? (
            messages
          ) : (
            <Empty
              className="card__messenger-empty"
              description={<b>Trenutno nema poruka.</b>}
              image={Empty.PRESENTED_IMAGE_SIMPLE}
            />
          )}
        </div>
        <Divider className="card__divider" />
        <Row
          className="card__input"
          type="flex"
          justify="start"
          align="middle"
          gutter={[{ xs: 12, md: 12 }]}
        >
          <Col xs={{ span: 21 }} md={{ span: 23 }}>
            <Form onSubmit={this.handleSubmit} hideRequiredMark={true}>
              <Form.Item className="card__input-text-area">
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
          </Col>
          <Col
            className="card__input-col-right"
            xs={{ span: 3 }}
            md={{ span: 1 }}
          >
            <Button
              className="card__input-col-right-button"
              icon="rocket"
              type="primary"
              shape="circle"
              size="large"
              onClick={this.handleSubmit}
            />
            <Button
              className="card__input-col-right-button"
              icon="link"
              shape="circle"
              size="large"
            />
          </Col>
        </Row>
      </div>
    );
  }
}

const Messenger = Form.create({ name: "message" })(MessengerForm);

function mapStateToProps(state) {
  return {
    messages: state.messages.messages,
    consumer: state.messages.consumer,
    connection: state.messages._id,
    user: state.auth.user._id
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sendMessage: payload => dispatch({ type: SEND_MESSAGE, payload }),
    newMessage: payload => dispatch({ type: NEW_MESSAGE, payload })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Messenger);
