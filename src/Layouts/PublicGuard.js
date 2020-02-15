import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "../components/Loading";
import history from "../utils/history";

export default OriginalComponent => {
  class ProtectedRoute extends Component {
    checkAuth() {
      if (this.props.isLogged) {
        history.push("/dashboard");
      }
    }
    componentDidMount() {
      this.checkAuth();
    }

    componentDidUpdate() {
      this.checkAuth();
    }
    render() {
      if (this.props.isLoading) {
        return <Loading />;
      }
      return <OriginalComponent {...this.props} />;
    }
  }
  function mapStateToProps(state) {
    return {
      isLogged: state.auth.isLogged,
      isLoading: state.auth.isLoading
    };
  }

  return connect(mapStateToProps, null)(ProtectedRoute);
};
