import React, { Component } from "react";
import { Descriptions, Form, Input, Button } from "antd";

class ProfileEdit extends Component {
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
          <Descriptions.Item label="Profil prodavnice">
            <Form
              {...formItemLayout}
              onSubmit={this.handleSubmit}
              hideRequiredMark={true}
            >
              <Form.Item label="Naziv prodavnice">
                {getFieldDecorator("storename", {
                  initialValue: "STRiK Natura Plus",
                  rules: [
                    {
                      required: true,
                      message: "Molimo Vas da upisete  naziv prodavnice!"
                    }
                  ]
                })(<Input disabled />)}
              </Form.Item>
              <Form.Item label="PIB">
                {getFieldDecorator("pib", {
                  initialValue: "1234567",
                  rules: [
                    {
                      required: true,
                      message: "Molimo Vas da upisete PIB prodavnice!"
                    }
                  ]
                })(<Input disabled />)}
              </Form.Item>
              <Form.Item label="Matični broj">
                {getFieldDecorator("maticnibroj", {
                  initialValue: "13579",
                  rules: [
                    {
                      required: true,
                      message: "Molimo Vas da upisete maticni broj prodavnice!"
                    }
                  ]
                })(<Input disabled />)}
              </Form.Item>

              <Form.Item label="Email prodavnice">
                {getFieldDecorator("storeemail", {
                  initialValue: "ukalajdzic@gmail.com",
                  rules: [
                    {
                      required: true,
                      message: "Molimo Vas da upisete email adresu prodavnice!"
                    }
                  ]
                })(<Input disabled />)}
              </Form.Item>
              <Form.Item label="Adresa prodavnice">
                {getFieldDecorator("storeadress", {
                  initialValue: "Profesora Vasica 7a, Vinca",
                  rules: [
                    {
                      required: true,
                      message: "Molimo Vas da upisete adresu prodavnice!"
                    }
                  ]
                })(<Input disabled />)}
              </Form.Item>
              <Form.Item label="Kontakt telefon">
                {getFieldDecorator("storephone", {
                  initialValue: "011/8066-356",
                  rules: [
                    {
                      required: true,
                      message:
                        "Molimo Vas da upisete kontakt telefon prodavnice!"
                    }
                  ]
                })(<Input />)}
              </Form.Item>
            </Form>
          </Descriptions.Item>
        </Descriptions>
        <Descriptions style={{ marginTop: 16 }} layout="vertical" bordered>
          <Descriptions.Item label="Podaci o vlasniku">
            <Form
              {...formItemLayout}
              onSubmit={this.handleSubmit}
              hideRequiredMark={true}
            >
              <Form.Item label="Ime">
                {getFieldDecorator("ceofirstname", {
                  initialValue: "Uros",
                  rules: [
                    {
                      required: true,
                      message: "Molimo Vas da upisete ime vlasnika!"
                    }
                  ]
                })(<Input disabled />)}
              </Form.Item>
              <Form.Item label="Prezime">
                {getFieldDecorator("ceolastname", {
                  initialValue: "Kalajdzic",
                  rules: [
                    {
                      required: true,
                      message: "Molimo Vas da upisete prezime vlasnika!"
                    }
                  ]
                })(<Input disabled />)}
              </Form.Item>

              <Form.Item label="Email">
                {getFieldDecorator("ceoemail", {
                  initialValue: "ukalajdzic@gmail.com",
                  rules: [
                    {
                      required: true,
                      message: "Molimo Vas da upisete email adresu vlasnika!"
                    }
                  ]
                })(<Input disabled />)}
              </Form.Item>
              <Form.Item label="Kontakt telefon">
                {getFieldDecorator("ceophone", {
                  initialValue: "063/755-8960",
                  rules: [
                    {
                      required: true,
                      message: "Molimo Vas da upisete kontakt telefon vlasnika!"
                    }
                  ]
                })(<Input />)}
              </Form.Item>
            </Form>
          </Descriptions.Item>
        </Descriptions>
        <div style={{ marginTop: 16 }}>
          <Button type="primary" onClick={this.handleSubmit}>
            <b>Sačuvajte</b>
          </Button>
        </div>
      </div>
    );
  }
}

const ProfileEditForm = Form.create({ name: "login" })(ProfileEdit);

export default ProfileEditForm;
