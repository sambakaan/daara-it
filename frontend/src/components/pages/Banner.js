import React, { Component } from 'react';
class Banner extends Component {
	render() {
		return (
			<React.Fragment>
				<section>
					<div id="slider-animation" className="carousel slide" data-ride="carousel">
						<ul className="carousel-indicators">
							<li data-target="#slider-animation" data-slide-to="0" className="active" />
							<li data-target="#slider-animation" data-slide-to="1" />
							<li data-target="#slider-animation" data-slide-to="2" />
						</ul>

						<div className="carousel-inner">
							<div className="carousel-item active">
								<img
									src="https://i.pinimg.com/originals/10/1b/bb/101bbb8a4e78d2a5d9589d60e410dac8.jpg"
									alt="Los Angeles"
								/>
								<div className="text-box">
									<h2 className="wow slideInRight" data-wow-duration="2s">
										This is Obitope text
									</h2>
									<p className="wow slideInLeft" data-wow-duration="2s">
										There is now an abundance of readable dummy texts. These are usually used when a
										text is required purely to fill a space.{' '}
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<img
									src="http://en.ddpai.com/webcommon/images/mix3/animation/bac-2.png"
									alt="Chicago"
								/>
								<div className="text-box">
									<h2 className="wow slideInUp" data-wow-duration="4s">
										This is samuel text
									</h2>
									<p className="wow fadeInDown" data-wow-duration="4s">
										There is now an abundance of readable dummy texts. These are usually used when a
										text is required purely to fill a space.{' '}
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<img src="https://playthunee.com/assets/images/4player-bg.jpg" alt="New York" />
								<div className="text-box">
									<h2 className="wow fadeInUp" data-wow-duration="4s">
										This is Airborne text
									</h2>
									<p className="wow fadeInUp" data-wow-duration="2s">
										There is now an abundance of readable dummy texts. These are usually used when a
										text is required purely to fill a space.{' '}
									</p>
								</div>
							</div>
						</div>

						<a className="carousel-control-prev" href="#slider-animation" data-slide="prev">
							<span className="carousel-control-prev-icon" />
						</a>
						<a className="carousel-control-next" href="#slider-animation" data-slide="next">
							<span className="carousel-control-next-icon" />
						</a>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default Banner;
