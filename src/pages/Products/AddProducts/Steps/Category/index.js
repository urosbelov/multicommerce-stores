import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Cascader, Divider } from "antd";
import {
  NEXT_STEP,
  PREV_STEP,
  PUSH_CATEGORY,
  CANCEL_ADD_PRODUCT
} from "../../../../../actions/types";

const options = [
  {
    value: "odeća",
    label: "Odeća",
    children: [
      {
        value: "farmerke",
        label: "Farmerke"
      }
    ]
  },
  {
    value: "obuća",
    label: "Obuća",
    children: [
      {
        value: "patike",
        label: "Patike"
      }
    ]
  }
];

class CategoryForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Category: ", values);
        this.props.pushToProduct(values.category);
        this.props.nextStep();
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form hideRequiredMark>
        <div style={{ padding: 16 }}>
          <Form.Item label="Kategorija">
            {getFieldDecorator("category", {
              rules: [
                {
                  required: true,
                  message: "Molimo Vas da izaberete kategoriju!"
                }
              ]
            })(
              <Cascader options={options} placeholder="Izaberite kategoriju" />
            )}
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
          <Button type="danger" onClick={this.props.cancel}>
            <b>Poništite</b>
          </Button>
          <div>
            <Button type="primary" onClick={this.handleSubmit}>
              <b>Dalje</b>
            </Button>
          </div>
        </div>
      </Form>
    );
  }
}

const Category = Form.create({ name: "category" })(CategoryForm);

const mapDispatchToProps = dispatch => {
  return {
    nextStep: () => dispatch({ type: NEXT_STEP }),
    prevStep: () => dispatch({ type: PREV_STEP }),
    cancel: () => dispatch({ type: CANCEL_ADD_PRODUCT }),
    pushToProduct: category => dispatch({ type: PUSH_CATEGORY, category })
  };
};

export default connect(null, mapDispatchToProps)(Category);
