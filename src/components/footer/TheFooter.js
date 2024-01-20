import Instagram from "../../images/instagram-blue.png";
import Facebook from "../../images/facebook-blue.png";
import Twitter from "../../images/twitter-blue.png";
import Brand from "../../images/navbar-brand.png";
import classNames from "../../classNames";
const TheFooter = ({padding}) => {

    return (
        <footer className={classNames('footer-container', !padding && 'minus-199')}>
            <div>
                <div className="container">
                    <div className="row justify-content-between bg-white">
                        <div className="col-md-3">
                            <div className="navbar-brand">
                                <img src={Brand} alt="Logo"/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="social-media">
                                <a href="#">
                                        <span className="image-container">
                                            <img src={Facebook} alt="Phone"/>
                                        </span>
                                </a>
                                <a href="#">
                                        <span className="image-container">
                                            <img src={Instagram} alt="Phone"/>
                                        </span>
                                </a>
                                <a href="#">
                                        <span className="image-container">
                                            <img src={Twitter} alt="Phone"/>
                                        </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div>
                <div className="container padding-50">
                    <div className="row flex-nowrap">
                        <div className="col-md-2">
                            <h5>Company Info</h5>
                            <div>
                                <a>About Us</a>
                                <a>Carrier</a>
                                <a>We are hiring</a>
                                <a>Blog</a>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <h5>Legal</h5>
                            <div>
                                <a>About Us</a>
                                <a>Carrier</a>
                                <a>We are hiring</a>
                                <a>Blog</a>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <h5>Company Info</h5>
                            <div>
                                <a>About Us</a>
                                <a>Carrier</a>
                                <a>We are hiring</a>
                                <a>Blog</a>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <h5>Features</h5>
                            <div>
                                <a>Business Marketing</a>
                                <a>User Analytic</a>
                                <a>Live Chat</a>
                                <a>Unlimited Support</a>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <h5>Resources</h5>
                            <div>
                                <a>IOS & Android</a>
                                <a>Watch a Demo</a>
                                <a>Customers</a>
                                <a>API</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h5>Get In Touch</h5>
                            <div className="custom-form-group-subscribe">
                                <div className="input-group">
                                    <input className="form-control input-style-1" placeholder="Your Email" id="subscribe"/>
                                    <div className="input-group-append">
                                        <button className="btn">Subscribe</button>
                                    </div>
                                </div>
                                <label className="second-text-color" htmlFor="subscribe">Lore imp sum dolor Amit</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="background-grey">
                <div className="container padding-25">
                    <div className="row">
                        <div className="col-md-7">
                            <span className="second-text-color">Made With Love By Finland All Right Reserved </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default TheFooter