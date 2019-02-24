import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './layout/Header';
import Banner from './pages/Banner';
import Home from './pages/Home';
import About from './pages/About';
import Discovery from './pages/Dicovery';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Forum from './forum/Forum';
import Footer from './layout/Footer';

class App extends Component {
	render() {
		return (
			<Router>
				<React.Fragment>
					<div id="header">
						<div className="dark-overlay">
							<Header />
							<Banner />
						</div>
					</div>
					<div className="container">
						<div className="dit-container">
							<Switch>
								<Route exact path="/" component={Home} />
								<Route exact path="/about" component={About} />
								<Route exact path="/gallery" component={Gallery} />
								<Route exact path="/discovery" component={Discovery} />
								<Route exact path="/contact" component={Contact} />
								<Route exact path="/forum" component={Forum} />
							</Switch>
						</div>
					</div>
					<Footer />
				</React.Fragment>
			</Router>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
