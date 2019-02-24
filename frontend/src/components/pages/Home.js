import React, { Component, Fragment } from 'react';
import Partner from './Partner';

class Home extends Component {
	render() {
		return (
			<Fragment>
				<div className="featured about-section text-shadow">
					<h2 className="section-title">Daara-IT</h2>
					<p className="section-desc">
						D-IT de son vrai nom « DAARA IT » est une forte communauté sénégalaise regroupant de jeunes IT
						passionné(e)s par les technologies....
					</p>
				</div>
				<div className="featured commission-section ">
				<h1 className="section-title mb-3">Nos commissions</h1>
					<p className="section-desc" />
					<div className="box">
						<div className="container">
							<div className="row">
								<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
									<div className="box-part text-center">
										<i className="fa fa-instagram fa-3x" aria-hidden="true" />

										<div className="title">
											<h4>La commission réseau</h4>
										</div>

										<div className="text">
											<span>
												Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te
												sed. Elitr scripta ocurreret qui ad.
											</span>
										</div>

										<a href="#" className="btn btn-outline-primary">Voir Plus</a>
									</div>
								</div>

								<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
									<div className="box-part text-center">
										<i className="fa fa-twitter fa-3x" aria-hidden="true" />

										<div className="title">
											<h4>La commission programmation</h4>
										</div>

										<div className="text">
											<span>
												Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te
												sed. Elitr scripta ocurreret qui ad.
											</span>
										</div>

										<a href="#" className="btn btn-outline-primary">Voir Plus</a>
									</div>
								</div>

								<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
									<div className="box-part text-center">
										<i className="fa fa-facebook fa-3x" aria-hidden="true" />

										<div className="title">
											<h4>La commission pentest </h4>
										</div>

										<div className="text">
											<span>
												Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te
												sed. Elitr scripta ocurreret qui ad.
											</span>
										</div>

										<a href="#" className="btn btn-outline-primary">Voir Plus</a>
									</div>
								</div>

								<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
									<div className="box-part text-center">
										<i className="fa fa-pinterest-p fa-3x" aria-hidden="true" />

										<div className="title">
											<h4>La commission juridique </h4>
										</div>

										<div className="text">
											<span>
												Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te
												sed. Elitr scripta ocurreret qui ad.
											</span>
										</div>

										<a href="#" className="btn btn-outline-primary">Voir Plus</a>
									</div>
								</div>

								<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
									<div className="box-part text-center">
										<i className="fa fa-google-plus fa-3x" aria-hidden="true" />

										<div className="title">
											<h4>La commission organisation </h4>
										</div>

										<div className="text">
											<span>
												Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te
												sed. Elitr scripta ocurreret qui ad.
											</span>
										</div>

										<a href="#" className="btn btn-outline-primary">Voir Plus</a>
									</div>
								</div>

								<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
									<div className="box-part text-center">
										<i className="fa fa-github fa-3x" aria-hidden="true" />

										<div className="title">
											<h4>La commission marketing&communication </h4>
										</div>

										<div className="text">
											<span>
												Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te
												sed. Elitr scripta ocurreret qui ad.
											</span>
										</div>

										<a href="#" className="btn btn-outline-primary">Voir Plus</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="featured gallery-section">
					<h2 className="section-title">Les geeks en action</h2>
					<p className="section-desc">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, voluptatem.
					</p>

					<div className="container">
						<div className="row gallery">
							<div className="col-md-12">
								<div id="galleryCarousel" className="carousel slide" data-ride="carousel">
									<ol className="carousel-indicators">
										<li data-target="#galleryCarousel" data-slide-to="0" className="active" />
										<li data-target="#galleryCarousel" data-slide-to="1" />
									</ol>

									<div className="carousel-inner">
										<div className="carousel-item active">
											<div className="row">
												<div className="col-md-3">
													<a
														data-lightbox="roadtrip"
														data-title="My caption"
														href="https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
													>
														<img
															className="img-fluid"
															src="https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
															alt="Image"
														/>
													</a>
												</div>
												<div className="col-md-3">
													<a href="#">
														<img
															className="img-fluid"
															src="http://placehold.it/250x250"
															alt="Image"
														/>
													</a>
												</div>
												<div className="col-md-3">
													<a href="#">
														<img
															className="img-fluid"
															src="http://placehold.it/250x250"
															alt="Image"
														/>
													</a>
												</div>
												<div className="col-md-3">
													<a href="#">
														<img
															className="img-fluid"
															src="http://placehold.it/250x250"
															alt="Image"
														/>
													</a>
												</div>
											</div>
										</div>

										<div className="carousel-item">
											<div className="row">
												<div className="col-md-3">
													<a href="#">
														<img
															className="img-fluid"
															src="http://placehold.it/250x250"
															alt="Image"
														/>
													</a>
												</div>
												<div className="col-md-3">
													<a href="#">
														<img
															className="img-fluid"
															src="http://placehold.it/250x250"
															alt="Image"
														/>
													</a>
												</div>
												<div className="col-md-3">
													<a href="#">
														<img
															className="img-fluid"
															src="http://placehold.it/250x250"
															alt="Image"
														/>
													</a>
												</div>
												<div className="col-md-3">
													<a href="#">
														<img
															className="img-fluid"
															src="http://placehold.it/250x250"
															alt="Image"
														/>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Partner />
			</Fragment>
		);
	}
}

export default Home;
