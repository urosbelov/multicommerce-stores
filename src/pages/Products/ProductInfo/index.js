import React, { Component } from "react";
import { connect } from "react-redux";
import { Drawer } from "antd";
import { CLOSE_PRODUCT_INFO_DRAWER } from "../../../actions/types";

class ProductInfo extends Component {
  render() {
    return (
      <div>
        <Drawer
          title="Informacije o proizvodu"
          placement="right"
          closable={false}
          onClose={this.props.infoProductDrawerClose}
          visible={this.props.infoProductDrawer}
        >
          <p>
            -Ovde ce se nalaziti sve informacije o proizvodu u ReadOnly
            formatu(izmena nije moguca).
          </p>
          <p>
            -Statistika o proizvodu(dogovoriti se sa Zaretom sta sve precizno).
          </p>
          <p>*Broj prikaza proizvoda.</p>
          <p>*Koliko puta je proizvod prodat.</p>
        </Drawer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    infoProductDrawer: state.infoProductDrawer.isOpened
  };
}

function mapDispatchToProps(dispatch) {
  return {
    infoProductDrawerClose: () => dispatch({ type: CLOSE_PRODUCT_INFO_DRAWER })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductInfo);
