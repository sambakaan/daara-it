import React, { Component, Fragment } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<Fragment>
				<section id="footer">
					<div className="container">
						<div className="row text-center text-xs-center text-sm-left text-md-left">
							<div className="col-xs-12 col-sm-4 col-md-4">
								<h5>Infos</h5>
								<ul className="list-unstyled quick-links">
									<li>
										<a href="javascript:void();">
											<i className="fa fa-map-marker" aria-hidden="true" /> 596, Sicap Mbao
											Extension
										</a>
									</li>
									<li>
										<a href="javascript:void();">
											<i className="fa fa-phone" />+221 77 992 99 52
										</a>
									</li>
									<li>
										<a href="javascript:void();">
											<i className="fa fa-whatsapp" />+221 76 377 22 60
										</a>
									</li>
									<li>
										<a href="mailto:contact@dit.tech">
											<i className="fa fa-paper-plane" />contact@dit.tech
										</a>
									</li>
								</ul>
							</div>
							<div className="col-xs-12 col-sm-4 col-md-4">
								<h5>Liens utils</h5>
								<ul className="list-unstyled quick-links">
									<li>
										<a href="javascript:void();">
											<i className="fa fa-angle-double-right" />Développeur front-end
										</a>
									</li>
									<li>
										<a href="javascript:void();">
											<i className="fa fa-angle-double-right" />Développeur Back-end
										</a>
									</li>
									<li>
										<a href="javascript:void();">
											<i className="fa fa-angle-double-right" />Développeur wbe full stack
										</a>
									</li>
									<li>
										<a href="javascript:void();">
											<i className="fa fa-angle-double-right" />Développeur Android
										</a>
									</li>
									<li>
										<a href="javascript:void();">
											<i className="fa fa-angle-double-right" />Développeur IOS
										</a>
									</li>
								</ul>
							</div>
							<div className="col-xs-12 col-sm-4 col-md-4">
								<h5>La plateforme</h5>
								<ul className="list-unstyled quick-links">
									<li>
										<a href="/">
											<i className="fa fa-angle-double-right" />Accueil
										</a>
									</li>
									<li>
										<a href="/about">
											<i className="fa fa-angle-double-right" />A propos
										</a>
									</li>
									<li>
										<a href="javascript:void();">
											<i className="fa fa-angle-double-right" />FAQ
										</a>
									</li>
									<li>
										<a href="javascript:void();">
											<i className="fa fa-angle-double-right" />Nous contacter
										</a>
									</li>
									<li>
										<a href="https://wwwe.sunlimetech.com" title="Design and developed by">
											<i className="fa fa-angle-double-right" />Nous suivre
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				<section id="footer-2">
					<div className="container">
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
								<ul className="list-unstyled list-inline social text-center">
									<li className="list-inline-item">
										<a href="https://facebook.com/dit221">
											<i className="fa fa-facebook" />
										</a>
									</li>
									<li className="list-inline-item">
										<a href="https://youtube.com/c/ditAcademy">
											<i className="fa fa-youtube" />
										</a>
									</li>
									<li className="list-inline-item">
										<a href="https://twitter.com/dit221">
											<i className="fa fa-twitter" />
										</a>
									</li>
									<li className="list-inline-item">
										<a href="javascript:void();">
											<i className="fa fa-instagram" />
										</a>
									</li>
									<li className="list-inline-item">
										<a href="https://github.com/dit221">
											<i className="fa fa-github" />
										</a>
									</li>
									<li className="list-inline-item">
										<a href="mailto:contact@dit.tech">
											<i className="fa fa-envelope" />
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="row second-footer">
							<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
								<p className="copy-text">
									<i className="fa fa-copyright" aria-hidden="true" />
									{' '}<span className="year" /> Tous droits réservés à
									<span className="dit-link"> dit</span>
								</p>
							</div>
						</div>
					</div>
				</section>
			</Fragment>
		);
	}
}
