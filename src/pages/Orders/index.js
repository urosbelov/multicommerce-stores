import React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Tag, Tooltip, Button, Table } from "antd";
import { GET_ORDERS } from "../../actions/types";

const ButtonGroup = Button.Group;

class Orders extends React.Component {
  componentDidMount() {
    console.log("Orders Component", new Date());
    this.orders = this.props.getOrders;
  }

  onChange = (pagination, filters, sorter) => {
    console.log("params", pagination, filters, sorter);
  };

  render() {
    const columns = [
      {
        title: "Rb.",
        dataIndex: "rb",
        width: 50
      },
      {
        title: "Šifra porudzbine",
        dataIndex: "code",
        width: 200,
        align: "center"
      },
      {
        title: "Kupac",
        dataIndex: "user"
      },
      {
        title: "Ukupno proizvoda",
        dataIndex: "totalProducts"
      },
      {
        title: "Ukupno za uplatu",
        dataIndex: "totalPrice",
        align: "right",
        defaultSortOrder: "default",
        sorter: (a, b) => a.price - b.price,
        render: price => (
          <p style={{ margin: 0 }}>
            {price} <span>RSD</span>
          </p>
        )
      },
      {
        title: "Status",
        dataIndex: "status",
        align: "center",
        width: 120,
        render: status => (
          <Tag style={{ margin: 0 }} color="red">
            Za slanje
          </Tag>
        )
      },
      {
        key: "operation",
        fixed: "right",
        align: "center",
        width: 120,
        render: record => (
          <ButtonGroup>
            <Button
              icon="info"
              onClick={e => {
                alert("Orders Info");
              }}
            />
            <Button
              icon="message"
              onClick={e => {
                alert("Send Message");
              }}
            />
            <Tooltip title="Završite porudžbinu" placement="topLeft">
              <Button
                icon="check"
                type="primary"
                onClick={e => {
                  alert("Confirm Order");
                }}
              />
            </Tooltip>
          </ButtonGroup>
        )
      }
    ];

    const data = Array.from(this.props.orders);
    const orders = data.map((order, index) => {
      let total = 0;
      order.items.forEach(item => {
        total = item.price + total;
      });
      return {
        rb: index + 1,
        key: order._id,
        code: order._id,
        user: order.user.firstname + " " + order.user.lastname,
        totalProducts: data.length,
        totalPrice: total
      };
    });
    return (
      <div>
        <Helmet>
          <title>Porudžbine</title>
          <meta
            name="description"
            content="This is a different description for this route."
          />
        </Helmet>

        <h1>Porudžbine</h1>
        <Table
          style={{ backgroundColor: "#fff" }}
          size="middle"
          bordered={true}
          columns={columns}
          dataSource={orders}
          onChange={this.onChange}
          scroll={{ x: 1000 }}
          locale={{
            filterConfirm: "OK",
            filterReset: "Reset",
            emptyText: "Trenutno nema porudzbina!"
          }}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getOrders: () => dispatch({ type: GET_ORDERS })
  };
}
function mapStateToProps(state) {
  return {
    orders: state.orders
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
