import React, { Component } from 'react';

class Gallery extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container">
					<div className="row row-gallery">
						<a
							href="../../../static/frontend/img/dit/ism/img.jpg"
							data-toggle="lightbox"
							data-gallery="gallery"
							className="col-md-4"
						>
							<img src="../../../static/frontend/img/dit/ism/img.jpg" className="img-fluid rounded" />
						</a>
						<a
							href="../../../static/frontend/img/dit/iam/img-1.jpg"
							data-toggle="lightbox"
							data-gallery="gallery"
							className="col-md-4"
						>
							<img src="../../../static/frontend/img/dit/iam/img-1.jpg" className="img-fluid rounded" />
						</a>
						<a
							href="https://unsplash.it/1200/768.jpg?image=253"
							data-toggle="lightbox"
							data-gallery="gallery"
							className="col-md-4"
						>
							<img src="https://unsplash.it/600.jpg?image=253" className="img-fluid rounded" />
						</a>
					</div>
					<div className="row">
						<a
							href="https://unsplash.it/1200/768.jpg?image=254"
							data-toggle="lightbox"
							data-gallery="gallery"
							className="col-md-4"
						>
							<img src="https://unsplash.it/600.jpg?image=254" className="img-fluid rounded" />
						</a>
						<a
							href="https://unsplash.it/1200/768.jpg?image=255"
							data-toggle="lightbox"
							data-gallery="gallery"
							className="col-md-4"
						>
							<img src="https://unsplash.it/600.jpg?image=255" className="img-fluid rounded" />
						</a>
						<a
							href="https://unsplash.it/1200/768.jpg?image=256"
							data-toggle="lightbox"
							data-gallery="gallery"
							className="col-md-4"
						>
							<img src="https://unsplash.it/600.jpg?image=256" className="img-fluid rounded" />
						</a>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Gallery;
