import React, { Component, Fragment } from 'react';
import Partner from './Partner';
import Banner from './Banner'
class Home extends Component {
	render() {
		return (
			<Fragment>
			
							<Banner />
						
				<div className="featured about-section text-shadow">
					<h2 className="section-title">Daara-IT</h2>
					<p className="section-desc">
					L'informatique plus qu'une passion, un mode de vie.
					</p>
				</div>
				<div className="featured commission-section ">
				<h1 className="section-title mb-3">Nos commissions</h1>
					<p className="section-desc"> Les hommes naissent égaux mais les meilleurs deviennent informaticiens! </p>
					<div className="box">
						<div className="container">
							<div className="row">
								<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
									<div className="box-part text-center">
									<img src="../../../static/frontend/img/logo/net_logo.png" width="80" height="80" alt="" />
										<div className="title">
											<h4>La commission réseau</h4>
										</div>

										<div className="text">
											<span>
												Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te
												sed. Elitr scripta ocurreret qui ad.
											</span>
										</div>

										<a href="#" className="dit-button">Voir Plus</a>
									</div>
								</div>

								<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
									<div className="box-part text-center">
										<img src="../../../static/frontend/img/logo/pro_logo.png" width="80" height="80" alt="" />
										<div className="title">
											<h4>La commission programmation</h4>
										</div>

										<div className="text">
											<span>
												Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te
												sed. Elitr scripta ocurreret qui ad.
											</span>
										</div>

										<a href="#" className="dit-button">Voir Plus</a>
									</div>
								</div>

								<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
									<div className="box-part text-center">
									<img src="../../../static/frontend/img/logo/pentest_logo.png" width="80" height="80" alt="" />

										<div className="title">
											<h4>La commission pentest </h4>
										</div>

										<div className="text">
											<span>
												Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te
												sed. Elitr scripta ocurreret qui ad.
											</span>
										</div>

										<a href="#" className="dit-button">Voir Plus</a>
									</div>
								</div>

								<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
									<div className="box-part text-center">
									<img src="../../../static/frontend/img/logo/desk_logo.png" width="80" height="80" alt="" />

										<div className="title">
											<h4>La commission juridique </h4>
										</div>

										<div className="text">
											<span>
												Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te
												sed. Elitr scripta ocurreret qui ad.
											</span>
										</div>

										<a href="#" className="dit-button">Voir Plus</a>
									</div>
								</div>

								<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
									<div className="box-part text-center">
									<img src="../../../static/frontend/img/logo/org_logo.png" width="80" height="80" alt="" />

										<div className="title">
											<h4>La commission organisation </h4>
										</div>

										<div className="text">
											<span>
												Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te
												sed. Elitr scripta ocurreret qui ad.
											</span>
										</div>

										<a href="#" className="dit-button">Voir Plus</a>
									</div>
								</div>

								<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
									<div className="box-part text-center">
									<img src="../../../static/frontend/img/logo/en_logo.png" width="80" height="80" alt="" />

										<div className="title">
											<h4>La commission anglaise </h4>
										</div>

										<div className="text">
											<span>
												Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te
												sed. Elitr scripta ocurreret qui ad.
											</span>
										</div>

										<a href="#" className="dit-button">Voir Plus</a>
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
