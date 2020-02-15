import { Button, Popconfirm, Tag } from "antd";
import React from "react";
import { connect } from "react-redux";
import { taggedTemplateExpression } from "@babel/types";

const ButtonGroup = Button.Group;

const columns = [
  {
    title: "Rb.",
    dataIndex: "rb",
    width: 20
  },
  {
    title: "Sifra",
    dataIndex: "code",
    width: 100
  },
  {
    title: "Naziv proizvoda",
    dataIndex: "name",
    filters: [
      {
        text: "Joe",
        value: "Joe"
      },
      {
        text: "Jim",
        value: "Jim"
      },
      {
        text: "Submenu",
        value: "Submenu",
        children: [
          {
            text: "Green",
            value: "Green"
          },
          {
            text: "Black",
            value: "Black"
          }
        ]
      }
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"]
  },
  {
    title: "Kolicina",
    dataIndex: "age",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age
  },
  {
    title: "Adresa",
    dataIndex: "address",
    filters: [
      {
        text: "London",
        value: "London"
      },
      {
        text: "New York",
        value: "New York"
      }
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ["descend", "ascend"]
  },
  {
    title: "Status",
    dataIndex: "status",
    align: "center"
  },
  {
    key: "operation",
    fixed: "right",
    width: 80,
    render: () => (
      <ButtonGroup>
        <Button icon="edit" />
        <Button type="danger" icon="delete" />
      </ButtonGroup>
    )
  }
];

const columnsProduct = removeItem => {
  const array = [
    {
      title: "Rb.",
      dataIndex: "rb",
      width: 20
    },
    {
      title: "Sifra",
      dataIndex: "code",
      width: 20
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
      align: "center",
      defaultSortOrder: "default",
      sorter: (a, b) => a.price - b.price,
      width: 120,
      render: price => (
        <p>
          {price} <span>RSD</span>
        </p>
      )
    },
    {
      title: "Status",
      dataIndex: "status",
      align: "center",
      width: 100,
      render: status => (
        <Tag color={status ? "green" : "red"}>
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
          <Button icon="info-circle" />
          <Button icon="edit" />

          <Popconfirm
            placement="topRight"
            title="Da li ste sigurni da zelite da obrisete ovaj proizvod?"
            okText="Da"
            cancelText="Ne"
            onConfirm={e => {
              removeItem(record.key);
            }}
          >
            <Button type="danger" icon="delete" />
          </Popconfirm>
        </ButtonGroup>
      )
    }
  ];
  return array;
};

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park"
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park"
  }
];

export connect(null,null)( { columns, data, columnsProduct })
