import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Divider, Upload, Icon } from "antd";
import {
  PREV_STEP,
  PRODUCT_ADDING,
  CANCEL_ADD_PRODUCT
} from "../../../../../actions/types";

class ImagesForm extends Component {
  postNewProduct = () => {
    console.log("Upload images form: ", this.props.newProduct);
    this.props.createItem(this.props.newProduct);
  };

  render() {
    return (
      <Form>
        <div
          style={{
            padding: 16,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <Upload>
            <Button>
              <Icon type="upload" /> Otpremite fotografije
            </Button>
          </Upload>
          <p>
            Srediti na kraju kada odredimo lokaciju cuvanja statickih fajlova...
          </p>
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
            <Button onClick={this.props.prevStep}>
              <b>Nazad</b>
            </Button>
            <Button type="primary" onClick={this.postNewProduct}>
              <b>Dodajte proizvod</b>
            </Button>
          </div>
        </div>
      </Form>
    );
  }
}

const Images = Form.create({ name: "images" })(ImagesForm);

const mapStateToProps = state => {
  return {
    newProduct: state.addProductModal.product
  };
};

const mapDispatchToProps = dispatch => {
  return {
    prevStep: () => dispatch({ type: PREV_STEP }),
    createItem: payload => dispatch({ type: PRODUCT_ADDING, payload }),
    cancel: () => dispatch({ type: CANCEL_ADD_PRODUCT })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Images);
