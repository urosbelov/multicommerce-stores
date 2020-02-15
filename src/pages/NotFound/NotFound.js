import React from "react";
import { Result } from "antd";
import { connect } from "react-redux";
import Redirect from "./Redirect";
import "./notFound.css";
import Loading from "../../components/Loading";

class NotFound extends React.Component {
  render() {
    if (this.props.isLoading) {
      return <Loading />;
    }
    return (
      <div className="wrapper">
        <Result
          status="404"
          title="404"
          subTitle="Stranica ne postoji!"
          extra={<Redirect isLogged={this.props.isLogged} />}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLogged: state.auth.isLogged,
    isLoading: state.auth.isLoading
  };
}

export default connect(mapStateToProps, null)(NotFound);
