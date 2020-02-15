import React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Table, Button, Tooltip, Tag, Popconfirm } from "antd";

import {
  GET_ITEMS,
  OPEN_EDIT_PRODUCT_MODAL,
  OPEN_ADD_PRODUCT_MODAL,
  OPEN_PRODUCT_INFO_DRAWER,
  SELECT_ITEM,
  REMOVE_ITEM
} from "../../actions/types";
import AddProductModal from "./AddProducts";
import EditProduct from "./EditProducts";
import ProductInfo from "./ProductInfo";

const ButtonGroup = Button.Group;

class Products extends React.Component {
  componentDidMount() {
    console.log("Products Component", new Date());
    this.items = this.props.getItems();
  }

  onChange = (pagination, filters, sorter) => {
    console.log("params", pagination, filters, sorter);
  };

  increment = () => {
    const raw = this.props.items.slice(1);
    return raw;
  };

  selectItem = id => {
    const selected = this.props.items.find(item => item._id === id);
    this.props.selectItem(selected);
  };

  render() {
    const columns = [
      {
        title: "Rb.",
        dataIndex: "rb",
        width: 50
      },
      {
        title: "Šifra",
        dataIndex: "code",
        width: 100,
        align: "center"
      },
      {
        title: "Naziv proizvoda",
        dataIndex: "name"
      },

      {
        title: "Opis",
        dataIndex: "description"
      },
      {
        title: "Cena",
        dataIndex: "price",
        align: "right",
        defaultSortOrder: "default",
        sorter: (a, b) => a.price - b.price,
        width: 120,
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
          <Tag style={{ margin: 0 }} color={status ? "green" : "red"}>
            {status ? "Objavljeno" : "Neobjavljeno"}
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
              icon="info-circle"
              onClick={this.props.openInfoProductDrawer}
            />
            <Button
              icon="edit"
              onClick={e => {
                this.props.openEditProductModal(record.key);
                this.selectItem(record.key);
              }}
            />

            <Popconfirm
              placement="topRight"
              title={`Da li ste sigurni da zelite da ${
                record.status ? "deaktivirate" : "aktivirate"
              } ovaj proizvod?`}
              okText="Da"
              cancelText="Ne"
              onConfirm={e => {
                console.log("Remove ID: ", record.key);
                this.props.removeItemById(record.key);
              }}
            >
              <Button
                type={record.status ? "primary" : "danger"}
                icon={record.status ? "close" : "check"}
              />
            </Popconfirm>
          </ButtonGroup>
        )
      }
    ];

    const data = Array.from(this.props.items);
    const items = data.map((item, index) => {
      return {
        rb: index + 1,
        key: item._id,
        name: item.name,
        code: item._id,
        price: item.price,
        description: item.description,
        status: item.status
      };
    });
    return (
      <div>
        <Helmet>
          <title>Proizvodi</title>
          <meta
            name="description"
            content="This is a different description for this route."
          />
        </Helmet>

        <h1>Proizvodi</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingBottom: 10
          }}
        >
          <Tooltip placement="left" title="Dodajte proizvod">
            <Button
              onClick={this.props.openAddProductModal}
              icon="plus"
              shape="circle"
            />
          </Tooltip>
          <ProductInfo />
          <EditProduct />
          <AddProductModal />
        </div>
        <Table
          style={{ backgroundColor: "#fff" }}
          size="middle"
          bordered={true}
          columns={columns}
          dataSource={items}
          onChange={this.onChange}
          scroll={{ x: 1000 }}
          locale={{
            filterConfirm: "OK",
            filterReset: "Reset",
            emptyText: "Trenutno nema proizvoda!"
          }}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getItems: () => dispatch({ type: GET_ITEMS }),
    removeItemById: id => dispatch({ type: REMOVE_ITEM, id }),
    openEditProductModal: productId =>
      dispatch({ type: OPEN_EDIT_PRODUCT_MODAL, productId }),
    openAddProductModal: () => dispatch({ type: OPEN_ADD_PRODUCT_MODAL }),
    openInfoProductDrawer: () => dispatch({ type: OPEN_PRODUCT_INFO_DRAWER }),
    selectItem: item => dispatch({ type: SELECT_ITEM, item })
  };
}
function mapStateToProps(state) {
  return {
    items: state.items
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
