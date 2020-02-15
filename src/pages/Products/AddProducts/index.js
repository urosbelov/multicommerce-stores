import React from "react";
import { Modal, Steps } from "antd";
import { connect } from "react-redux";
import { CLOSE_ADD_PRODUCT_MODAL } from "../../../actions/types";
import Category from "./Steps/Category";
import BasicInfo from "./Steps/BasicInfo";
import Images from "./Steps/Images";
import "./AddProducts.css";

const { Step } = Steps;

const steps = [
  {
    key: 0,
    title: "Kategorija",
    content: () => {
      return <Category />;
    }
  },
  {
    key: 1,
    title: "Osnovne informacije",
    content: () => {
      return <BasicInfo />;
    }
  },
  {
    key: 2,
    title: "Fotografije",
    content: () => {
      return <Images />;
    }
  }
];

class Add extends React.Component {
  handleSubmit = e => {
    const { resetFields } = this.props.form;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.createItem(values);
        resetFields();
      }
    });
  };

  render() {
    return (
      <Modal
        title={
          <Steps current={this.props.currentStep}>
            {steps.map(step => (
              <Step key={step.key} title={step.title} />
            ))}
          </Steps>
        }
        visible={this.props.addProductModal}
        onCancel={this.props.closeAddProductModal}
        footer={null}
        width={800}
        closable={false}
        bodyStyle={{ padding: 0 }}
      >
        <div className="steps-content">
          {steps[this.props.currentStep].content()}
        </div>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
    addProductModal: state.addProductModal.isOpened,
    currentStep: state.addProductModal.currentStep
  };
}

function mapDispatchToProps(dispatch) {
  return {
    closeAddProductModal: () => dispatch({ type: CLOSE_ADD_PRODUCT_MODAL })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Add);
