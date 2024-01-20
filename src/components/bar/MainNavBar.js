import SearchBlack from "../../images/search-black.svg";
import CartBlack from "../../images/cart-black.svg";
import Toggle from "../../images/toggle.svg";
import ChevronDown from "../../images/chevron-down.svg";
import User from "../../images/user.svg";
import Search from "../../images/search.svg";
import Cart from "../../images/cart.svg";
import Love from "../../images/love.svg";
import {useState} from "react";
import classNames from '../../classNames';
import {Link} from "react-router-dom";

const MainNavBar = ({padding, cart}) => {
    const [show, setShow] = useState(false)
    return (
        <nav className={classNames('navbar-light align-items-center', padding && 'padding-199')}>
            <div className="navbar-brand">
                Bandage
            </div>
            <div className="navbar-toggle">
                <button className="toggle-icn">
                    <img src={SearchBlack} alt="Search"/>
                </button>
                <button className="toggle-icn">
                    <img src={CartBlack} alt="Cart"/>
                </button>
                <button className="toggle-icn" onClick={() => setShow(!show)}>
                    <img src={Toggle} alt="Togggle"/>
                </button>
                <nav className={classNames('navbar-nav', (show && !padding) && 'w--open')}>
                    <li>
                        <a onClick={() => setShow(!show)}>Home</a>
                    </li>
                    <li>
                        <a onClick={() => setShow(!show)}>Product</a>
                    </li>
                    <li>
                        <a onClick={() => setShow(!show)}>Pricing</a>
                    </li>
                    <li>
                        <a onClick={() => setShow(!show)}>Contact</a>
                    </li>
                </nav>
                <nav className={classNames('navbar-nav', (show && padding) && 'w--open')}>
                    <li>
                        <a onClick={() => setShow(!show)}>Home</a>
                    </li>
                    <li>
                        <a onClick={() => setShow(!show)}>Shop</a>
                    </li>
                    <li>
                        <a onClick={() => setShow(!show)}>About</a>
                    </li>
                    <li>
                        <a onClick={() => setShow(!show)}>Blog</a>
                    </li>
                    <li>
                        <a onClick={() => setShow(!show)}>Contact</a>
                    </li>
                    <li>
                        <a onClick={() => setShow(!show)}>Pages</a>
                    </li>
                    <li>
                        <a href="#">
                            <button className="btn-32 fw-bold">
                                <div className="image-container">
                                    <img src={User} alt="User"/>
                                </div>
                                Login / Register
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <button className="btn-32">
                                <div className="image-container">
                                    <img src={Search} alt="Search"/>
                                </div>
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <button className="btn-32">
                                <div className="image-container">
                                    <img src={Cart} alt="Cart"/>
                                </div>
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <button className="btn-32">
                                <div className="image-container">
                                    <img src={Love} alt="Love"/>
                                </div>
                            </button>
                        </a>
                    </li>
                </nav>
            </div>
            <div className="collapse navbar-collapse justify-content-between">
                <ul className="navbar-nav">
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <div
                        className="dropdown-2 w-dropdown dropdown"
                    >
                        <div className="dropdown-toggle-2 w-dropdown-toggle dropdown-toggle">
                            Shop
                            <img
                                src={ChevronDown}
                                loading="lazy"
                                alt=""
                                className="m"
                            />
                        </div>
                        <nav className="dropdown-list-2-copy w-dropdown-list dropdown-menu">
                            <a href="#" className="dropdown-link w-dropdown-link"
                            >Transportation</a
                            >
                            <a href="#" className="dropdown-link w-dropdown-link"
                            >Marketing</a
                            >
                            <a href="#" className="dropdown-link w-dropdown-link"
                            >Telecommunications</a
                            >
                            <a href="#" className="dropdown-link w-dropdown-link"
                            >Agriculture</a
                            >
                            <a href="#" className="dropdown-link w-dropdown-link"
                            >Fashion &amp; Beauty</a
                            >
                            <a href="#" className="dropdown-link w-dropdown-link"
                            >Catering</a
                            >
                            <a href="#" className="dropdown-link w-dropdown-link"
                            >Arts &amp; Entertainment</a
                            >
                            <a href="#" className="dropdown-link w-dropdown-link"
                            >Electronics</a
                            >
                            <a href="#" className="dropdown-link w-dropdown-link"
                            >Gadgets</a
                            >
                            <a href="#" className="dropdown-link w-dropdown-link"
                            >Banking</a
                            >
                            <a href="#" className="dropdown-link w-dropdown-link"
                            >Technology</a
                            >
                        </nav>
                    </div>
                    <li>
                        <a href="#">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Pages
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav gap-0">
                    <li>
                        <a href="#">
                            <button className="btn-32 fw-bold">
                                <div className="image-container">
                                    <img src={User} alt="User"/>
                                </div>
                                Login / Register
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <button className="btn-32">
                                <div className="image-container">
                                    <img src={Search} alt="Search"/>
                                </div>
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <button className="btn-32">
                                <div className="image-container">
                                    <img src={Cart} alt="Cart"/>
                                </div>
                                {cart.length}
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <button className="btn-32">
                                <div className="image-container">
                                    <img src={Love} alt="Love"/>
                                </div>
                                1
                            </button>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default MainNavBar;