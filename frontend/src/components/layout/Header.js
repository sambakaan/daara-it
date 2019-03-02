import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<React.Fragment>
				<nav className="navbar navbar-expand-sm dit-navbar">
					<div className="container">
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarTogglerDemo01"
							aria-controls="navbarTogglerDemo01"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<i className="fa fa-bars" aria-hidden="true" />
						</button>
						<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
							<Link className="navbar-brand" to="/">
							<img src="../../../static/frontend/img/logo/logo_dit.png" width="40" height="40" alt="" />
							</Link>
							<ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<Link className="nav-link" to="/about">
										A propos
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/gallery">
										Gallery
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/discovery">
										Découverte
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/contact">
										Contact
									</Link>
								</li>
								<li className="nav-item">
									<a className="nav-link" target="_blank" href="https://daarait.freeflarum.com/">
										Forum
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</React.Fragment>
		);
	}
}

export default Header;
