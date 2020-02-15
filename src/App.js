import React from "react";
import { Router, Switch, Redirect, Route } from "react-router-dom";
import { CHECK_SESSION, GET_CONNECTIONS } from "./actions/types";
import { connect } from "react-redux";
import Loadable from "react-loadable";
import { Helmet } from "react-helmet";
import history from "./utils/history";

import privateGuard from "./Layouts/PrivateGuard";
import publicGuard from "./Layouts/PublicGuard";
//TEMPLATES
import Login from "./pages/Login";
import Spinner from "./components/Spinner";

const InitLayout = Loadable({
	loader: () => import("./Layouts/InitLayout"),
	loading: Spinner
});

const BasicLayout = Loadable({
	loader: () => import("./Layouts/BasicLayout"),
	loading: Spinner
});
const Dashboard = Loadable({
	loader: () => import("./pages/Dashboard"),
	loading: Spinner
});

const Analytics = Loadable({
	loader: () => import("./pages/Analytics"),
	loading: Spinner
});

const Products = Loadable({
	loader: () => import("./pages/Products"),
	loading: Spinner
});
const Orders = Loadable({
	loader: () => import("./pages/Orders"),
	loading: Spinner
});

const Account = Loadable({
	loader: () => import("./pages/Account"),
	loading: Spinner
});

const Profile = Loadable({
	loader: () => import("./pages/Profile"),
	loading: Spinner
});

const Messages = Loadable({
	loader: () => import("./pages/Messages"),
	loading: Spinner
});

const NotFound = Loadable({
	loader: () => import("./pages/NotFound/NotFound"),
	loading: Spinner
});

class App extends React.Component {
	componentDidMount() {
		console.log("App Page: ", Date.now());
		this.props.checkSession();
	}

	render() {
		return (
			<div>
				<Helmet
					titleTemplate="%s - MultiCommerce"
					defaultTitle="MultiCommerce"
				/>
				<Router history={history}>
					<Switch>
						<InitLayout
							exact
							path="/"
							component={publicGuard(
								Login
							)}
						/>
						<BasicLayout
							exact
							path="/dashboard"
							component={privateGuard(
								Dashboard
							)}
						/>
						<BasicLayout
							exact
							path="/analytics"
							component={privateGuard(
								Analytics
							)}
						/>
						<BasicLayout
							exact
							path="/products"
							component={privateGuard(
								Products
							)}
						/>
						<BasicLayout
							exact
							path="/orders"
							component={privateGuard(
								Orders
							)}
						/>
						<BasicLayout
							exact
							path="/account*"
							component={privateGuard(
								Account
							)}
						/>
						<BasicLayout
							exact
							path="/profile*"
							component={privateGuard(
								Profile
							)}
						/>
						<BasicLayout
							exact
							path="/messages"
							component={privateGuard(
								Messages
							)}
						/>
						<Route component={NotFound} />
						<Redirect from="*" to="/404" />
					</Switch>
				</Router>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		isLogged: state.auth.isLogged
	};
}

function mapDispatchToProps(dispatch) {
	return {
		checkSession: () => dispatch({ type: CHECK_SESSION }),
		getConnections: payload =>
			dispatch({ type: GET_CONNECTIONS, payload })
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
