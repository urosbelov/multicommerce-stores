import React, { Component } from "react";
import { Descriptions, Form, Input, Button } from "antd";

class AccountSecurity extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    return (
      <div>
        <Descriptions layout="vertical" bordered>
          <Descriptions.Item label="Sigurnost">
            <Form {...formItemLayout} hideRequiredMark={true}>
              <Form.Item label="Stara lozinka">
                {getFieldDecorator("oldPassword", {
                  rules: [
                    {
                      required: true,
                      message: "Molimo Vas da upisete trenutnu lozinku!"
                    }
                  ]
                })(<Input.Password />)}
              </Form.Item>
              <Form.Item label="Nova lozinka">
                {getFieldDecorator("newPassword", {
                  rules: [
                    {
                      required: true,
                      message: "Molimo Vas da upisete novu lozinku!"
                    }
                  ]
                })(<Input.Password />)}
              </Form.Item>
              <Form.Item label="Potvrdite novu lozinku">
                {getFieldDecorator("confirmPassword", {
                  rules: [
                    {
                      required: true,
                      message: "Molimo Vas da potvrdite novu lozinku!"
                    }
                  ]
                })(<Input.Password />)}
              </Form.Item>
            </Form>
          </Descriptions.Item>
        </Descriptions>
        <div style={{ marginTop: 16 }}>
          <Button type="primary" onClick={this.handleSubmit}>
            <b>Ažurirajte lozinku </b>
          </Button>
        </div>
      </div>
    );
  }
}

const SettingsForm = Form.create({ name: "login" })(AccountSecurity);

export default SettingsForm;
