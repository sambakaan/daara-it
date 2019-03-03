import React, { Component } from 'react';

class Contact extends Component {
	render() {
		const contactStyle = {width: '100%', height: '150px'}
		return (
			<React.Fragment>
				<h2 className="section-title"></h2>
				<div className="container contact-form">
            <div className="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div>
            <form method="post">
                <h3>Nous contacter</h3>
               <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" name="txtName" className="form-control" placeholder="Your Name *" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" />
                        </div>
                        <div className="form-group">
                            <input type="submit" name="btnSubmit" className="btnContact"  />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <textarea name="txtMsg" className="form-control" placeholder="Your Message *" style={contactStyle}></textarea>
                        </div>
                    </div>
                </div>
            </form>
</div>
			</React.Fragment>
		);
	}
}

export default Contact;
