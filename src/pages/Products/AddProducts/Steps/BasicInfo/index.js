import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Divider, Input, InputNumber } from "antd";
import {
  NEXT_STEP,
  PREV_STEP,
  CLOSE_ADD_PRODUCT_MODAL,
  PUSH_BASIC_INFO,
  CANCEL_ADD_PRODUCT
} from "../../../../../actions/types";

const { TextArea } = Input;

class BasicInfoForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Basic Info: ", values);
        this.props.pushToProduct(values.name, values.price, values.description);
        this.props.nextStep();
      }
    });
  };

  handleClose = () => {
    this.props.cancel();
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form hideRequiredMark>
        <div style={{ padding: 16 }}>
          <Form.Item label="Naziv proizvoda">
            {getFieldDecorator("name", {
              rules: [
                {
                  required: true,
                  message: "Molimo Vas da upisete naziv proizvoda!"
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Cena">
            {getFieldDecorator("price", {
              rules: [
                {
                  required: true,
                  message: "Molimo Vas da upisete cenu proizvoda!"
                }
              ]
            })(<InputNumber min={0} max={1000000} style={{ width: "100%" }} />)}
          </Form.Item>
          <Form.Item label="Kratak opis proizvoda:">
            {getFieldDecorator("description", {
              rules: [
                {
                  required: true,
                  message: "Molimo Vas da opisete proizvod!"
                }
              ]
            })(<TextArea rows={6} />)}
          </Form.Item>
        </div>
        <Divider style={{ margin: 0 }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 7
          }}
        >
          <Button type="danger" onClick={this.handleClose}>
            <b>Poništite</b>
          </Button>
          <div>
            <Button onClick={this.props.prevStep}>
              <b>Nazad</b>
            </Button>
            <Button type="primary" onClick={this.handleSubmit}>
              <b>Dalje</b>
            </Button>
          </div>
        </div>
      </Form>
    );
  }
}

const BasicInfo = Form.create({ name: "basicinfo" })(BasicInfoForm);

const mapDispatchToProps = dispatch => {
  return {
    nextStep: () => dispatch({ type: NEXT_STEP }),
    prevStep: () => dispatch({ type: PREV_STEP }),
    pushToProduct: (name, price, description) =>
      dispatch({ type: PUSH_BASIC_INFO, name, price, description }),
    cancel: () => dispatch({ type: CANCEL_ADD_PRODUCT }),
    addProductModalClose: () => dispatch({ type: CLOSE_ADD_PRODUCT_MODAL })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(BasicInfo);
