import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import App from './App';
import Portal from './components/Portal/Portal';
import Search from './components/Search/Search';

const PortalWithInfo = () => <h1>Info</h1>;

class AppRouter extends Component {
	state = {
		isSearchVisible: false,
	};

	render() {
		const PortalWithSearch = () => (
			<Portal>
				<Search />
			</Portal>
		);

		return (
			<Router>
				<React.Fragment>
					<App />
					<Switch>
						<Route path="/search" component={PortalWithSearch} />
						<Route path="/info" component={PortalWithInfo} />
					</Switch>
					<div className="open-portal">
						<Link to="/search">Add a book</Link>
					</div>
				</React.Fragment>
			</Router>
		);
	}
}

export default AppRouter;
