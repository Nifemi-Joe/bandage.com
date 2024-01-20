import Phone from "../../images/Vector.svg";
import Mail from "../../images/mail.svg";
import Twitter from "../../images/tweet.svg";
import Youtube from "../../images/youtube.svg";
import Facebook from "../../images/facebook.svg";
import Instagram from "../../images/instagram.svg";
import User from "../../images/user.svg"
import Search from "../../images/search.svg"
import Cart from "../../images/cart.svg"
import Love from "../../images/love.svg";
import ChevronDown from "../../images/chevron-down.svg";
import SearchBlack from "../../images/search-black.svg";
import CartBlack from "../../images/cart-black.svg";
import Toggle from "../../images/toggle.svg";
import {useState} from "react";
import '../../css/NavBarCSS.css';
import classNames from '../../classNames';

const ContactNavBar = ({padding}) => {
    const [show, setShow] = useState(false)
    return (
        <nav className={classNames('navbar-dark', padding && 'padding-199')}>
            <div className="collapse navbar-collapse">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <button className="btn-sm-20">
                                    <span className="image-container">
                                        <img src={Phone} alt="Phone"/>
                                    </span>
                                <h6>(225) 555-0118</h6>
                            </button>
                            <button className="btn-sm-20">
                                    <span className="image-container">
                                        <img src={Mail} alt="Phone"/>
                                    </span>
                                <h6>michelle.rivera@example.com</h6>
                            </button>
                        </div>
                        <div className="col-md-4 justify-content-center">
                            <h6>Follow Us  and get a chance to win 80% off</h6>
                        </div>
                        <div className="col-md-4 justify-content-end">
                            <h6>Follow Us :</h6>
                            <div className="social-media">
                                <a href="#">
                                        <span className="image-container">
                                            <img src={Instagram} alt="Phone"/>
                                        </span>
                                </a>
                                <a href="#">
                                        <span className="image-container">
                                            <img src={Youtube} alt="Phone"/>
                                        </span>
                                </a>
                                <a href="#">
                                        <span className="image-container">
                                            <img src={Facebook} alt="Phone"/>
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
        </nav>
)
}
export default ContactNavBar