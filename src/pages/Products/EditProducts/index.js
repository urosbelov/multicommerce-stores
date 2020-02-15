import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Drawer,
  Row,
  Col,
  Form,
  InputNumber,
  Input,
  Button,
  Divider,
  Icon,
  Popconfirm,
  Cascader
} from "antd";
import { CLOSE_EDIT_PRODUCT_MODAL, REMOVE_ITEM } from "../../../actions/types";
import { options } from "./cascader";

const { TextArea } = Input;

let id = 0;

class EditProductForm extends Component {
  //////////

  remove = k => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue("keys");
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k)
    });
  };

  add = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue("keys");
    const nextKeys = keys.concat(id++);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys
    });
  };

  //////////

  handleSubmit = e => {
    const { resetFields } = this.props.form;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Edit Products: ", values);
        resetFields();
      }
    });
  };

  closeModal = () => {
    const { resetFields } = this.props.form;
    this.props.editProductModalClose();
    resetFields();
  };

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;

    getFieldDecorator("keys", { initialValue: [] });

    const keys = getFieldValue("keys");
    const formItems = keys.map((k, index) => (
      <Form.Item label={index === 0 ? "Tagovi" : ""} required={false} key={k}>
        {getFieldDecorator(`names[${k}]`, {
          validateTrigger: ["onChange", "onBlur"],
          rules: [
            {
              required: true,
              whitespace: true,
              message: "Molimo Vas da dodate tag ili da uklonite ovo polje."
            }
          ]
        })(
          <Input placeholder="Tag" style={{ width: "60%", marginRight: 8 }} />
        )}
        {keys.length > 1 ? (
          <Icon
            className="dynamic-delete-button"
            type="minus-circle-o"
            onClick={() => this.remove(k)}
          />
        ) : null}
      </Form.Item>
    ));

    return (
      <div>
        <Drawer
          title="Izmene proizvoda"
          headerStyle={{
            position: "sticky",

            width: "100%",
            borderTop: "1px solid #e9e9e9",
            padding: "10px 16px",
            background: "#fff"
          }}
          visible={this.props.editProductModal}
          onClose={this.closeModal}
          width="50%"
        >
          <div>
            <Form hideRequiredMark>
              <Row>
                <div
                  style={{
                    backgroundColor: "lightcoral",
                    height: 120,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                  }}
                >
                  <b>Fotografije</b>
                  <p>
                    Na kraju kada odredimo lokaciju cuvanja statickih fajlova...
                  </p>
                </div>
              </Row>
              <Divider />
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Naziv proizvoda">
                    {getFieldDecorator("name", {
                      initialValue: `${this.props.item.name}`,
                      rules: [
                        {
                          required: true,
                          message: "Molimo Vas da upisete naziv proizvoda!"
                        }
                      ]
                    })(<Input />)}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Cena">
                    {getFieldDecorator("price", {
                      initialValue: `${this.props.item.price}`,
                      rules: [
                        {
                          required: true,
                          message: "Molimo Vas da upisete cenu proizvoda!"
                        }
                      ]
                    })(
                      <InputNumber
                        min={0}
                        max={1000000}
                        style={{ width: "100%" }}
                      />
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Divider />
              <Row gutter={16} type="flex" justify="center">
                <Col span={12}>
                  <div>
                    <Form.Item label="Kategorija">
                      {getFieldDecorator("category", {
                        initialValue: [this.props.item.category],
                        rules: [
                          {
                            required: true,
                            message: "Molimo Vas da izaberete kategoriju!"
                          }
                        ]
                      })(<Cascader options={options} />)}
                    </Form.Item>
                  </div>
                </Col>
                <Col span={12}>
                  <b>
                    Dogovoriti se sa Zaretom oko tagova (Izbor iz selekcije ili
                    sam upis!)... Ako bude sam upis, komponent Tag/Animate Tags
                  </b>
                  {formItems}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={this.add}
                      style={{ width: "60%" }}
                      icon="plus"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Divider />
              <Row>
                <Form.Item label="Kratak opis proizvoda:">
                  {getFieldDecorator("description", {
                    initialValue: `${this.props.item.description}`,
                    rules: [
                      {
                        required: true,
                        message: "Molimo Vas da opisete proizvod!"
                      }
                    ]
                  })(<TextArea style={{ width: "100%" }} rows={6} />)}
                </Form.Item>
              </Row>
              <Divider />
              <Row>
                <Col
                  style={{ display: "flex", flexDirection: "column" }}
                  span={6}
                >
                  <b style={{ margin: 7 }}>Akcije</b>
                  <Popconfirm
                    placement="top"
                    title="Da li ste sigurni da želite da izbrišete ovaj proizvod?"
                    okText="Da"
                    cancelText="Ne"
                    onConfirm={e => {
                      this.props.removeItemById(this.props.item._id);
                    }}
                  >
                    <Button type="danger" onClick={e => {}}>
                      <b>Izbrišite proizvod</b>
                    </Button>
                  </Popconfirm>
                </Col>
              </Row>
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: "100%",
                  borderTop: "1px solid #e9e9e9",
                  padding: "10px 16px",
                  background: "#fff",
                  textAlign: "right"
                }}
              >
                <Button onClick={this.closeModal}>
                  <b>Poništite</b>
                </Button>
                <Button type="primary" onClick={this.handleSubmit}>
                  <b>Ažurirajte</b>
                </Button>
              </div>
            </Form>
          </div>
        </Drawer>
      </div>
    );
  }
}

const EditProduct = Form.create({ name: "editItem" })(EditProductForm);

function mapStateToProps(state) {
  return {
    editProductModal: state.editProductModal.isOpened,
    item: state.selectedItem
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editProductModalClose: () => dispatch({ type: CLOSE_EDIT_PRODUCT_MODAL }),
    removeItemById: id => dispatch({ type: REMOVE_ITEM, id })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);
