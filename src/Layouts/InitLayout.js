import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

class InitLayout extends React.Component {
  render() {
    const { component: Component, isLogged, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={matchProps => (
          <React.Fragment>
            <Component {...matchProps} />
          </React.Fragment>
        )}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    isLogged: state.isLogged
  };
}

export default connect(mapStateToProps, null)(InitLayout);
