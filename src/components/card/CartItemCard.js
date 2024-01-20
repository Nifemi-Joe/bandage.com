import Item1 from "../../images/background-9.jpeg";
import Item2 from "../../images/background-10.jpeg";
import Item3 from "../../images/background-11.jpeg";
import RedDot from "../../images/red-dot.svg";
import BlueDot from "../../images/blue-dot.svg";
import GreenDot from "../../images/green-dot.svg";
import DarkDot from "../../images/dark-blue-dot.svg";
import Love from "../../images/dark-love.svg";
import Cart from "../../images/cart-black.svg";
import Eye from "../../images/dark-eye.svg";
import Background from "../../images/background-12.png";
import { CCarousel, CCarouselItem, CImage} from '@coreui/react';
import Stars from "../../images/stars.svg";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import Compare from "../../images/compare.svg";
const CartItemCard = ({product, changeProduct, products, changeId, addCart }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    let { id } = useParams();
    let navigate = useNavigate();
    console.log(id)
    // let JSONProduct = JSON.parse(product)
    useEffect(() => {
        console.log(activeIndex)
    }, [activeIndex])
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    const goToSingleProduct = (id) => {
        changeId(id);
        navigate(`/check-out/${id}`);
    }
    function isObjEmpty (obj) {
        return Object.keys(obj).length === 0;
    }
    const  fetchProduct = async() => {
        try {
            axios.get(`https://dummyjson.com/products/${id}`)
                .then(response => {
                    // setIsLoading(false);
                    console.log(changeProduct);
                    changeProduct(JSON.stringify(response.data));
                    if (response.data){
                        console.log(response.data);
                        changeProduct(JSON.stringify(response.data));
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        } catch (err) {
            alert(err)
        }
    }
    useEffect(() => {
        fetchProduct()
    }, [product]);
    return (
        <div>
            <div className="main-container bg-grey">
                <div className="container p-0">
                    <div className="row">
                        <div className="col-md-6">
                            <CCarousel controls activeIndex={activeIndex} >
                                {
                                    product.images &&
                                    product.images.map((image, i) => <CCarouselItem active={activeIndex === i}>
                                        <CImage className="d-block w-100" src={image} alt={"Slide " + i} key={i}/>
                                    </CCarouselItem>)
                                }
                            </CCarousel>
                            <div className="carousel-indicators">
                                {
                                    product.images &&
                                    product.images.map((image, i) => <div className="carouselCaptions" onClick={() => setActiveIndex(i)} key={i}>
                                        <img src={image} alt={"Item " + i}/>
                                    </div>)
                                }
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h4>{product.title}</h4>
                            <div className="frame-31">
                                <div className="star-container">
                                    <img src={Stars} alt="Stars"/>
                                </div>
                                <h6 className="second-text-color">10 Reviews</h6>
                            </div>
                            <h5>{USDollar.format(product.price)}</h5>
                            <div className="d-flex">
                                <h6 className="second-text-color">Availability : </h6>
                                {
                                    product.stock > 0 ?  <h6 className="disabled-element-color"> In Stock </h6> : <h6 className="disabled-element-color"> Out of Stock </h6>
                                }
                            </div>
                            <p></p>
                            <hr style={{marginTop: "119px", marginBottom: "29px"}}/>
                            <div className="product-colors">
                                <img src={BlueDot} alt="Dot"/>
                                <img src={GreenDot} alt="Dot"/>
                                <img src={RedDot} alt="Dot"/>
                                <img src={DarkDot} alt="Dot"/>
                            </div>
                            <div className="product-actions">
                                <button className="btn btn-primary btn-sm">Select Options</button>
                                <button className="white-btn"><img src={Love} alt="Love"/></button>
                                <button className="white-btn" onClick={() => addCart(product)}><img src={Cart} alt="Cart"/></button>
                                <button className="white-btn"><img src={Eye} alt="Eye"/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-container d-r-none">
                <div className="navbar-style-3 navbar-light">
                    <nav>
                        <li>
                            <a className="second-text-color">
                                Description
                            </a>
                        </li>
                        <li>
                            <a className="second-text-color">
                                Additional Information
                            </a>
                        </li>
                        <li>
                            <a className="second-text-color">
                                Reviews<span className="secondary-text-color">(0)</span>
                            </a>
                        </li>
                    </nav>
                    <div className="line-1"></div>
                </div>
                <div>
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-md-4">
                                <div className="card-item">
                                    <h5>{product.brand} </h5>
                                    <h6 className="second-text-color">{product.description}</h6>
                                    <div className="list-row">
                                        <div className="line-2"></div>
                                        <h5 className="second-text-color">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h5>
                                    </div>
                                    <h6 className="second-text-color">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h6>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card-item gy-absolute">
                                    <img src={product.thumbnail} alt="Item"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-container bg-grey">
                <div className="container d-r-none">
                    <div className="row">
                        <div className="main-content align-items-start">
                            <h3>BESTSELLER PRODUCTS</h3>
                        </div>
                    </div>
                    <div className="line-1"></div>
                    <div className="row flex-wrap">
                        {
                            !isObjEmpty(products) && products.products.map((product, index) => <div className="col-md-3" key={index}>
                                <div className="product-card  position-relative">
                                    <div className="fixed-height">
                                        <img src={product.thumbnail} alt="Background"/>
                                    </div>
                                    <div className="overlay-grey d-flex flex-column position-absolute g-1" onClick={() => goToSingleProduct(product.id)}>
                                        <button className="white-btn"><img src={Compare} alt="Compare"/></button>
                                        <button className="white-btn"><img src={Love} alt="Love"/></button>
                                        <button className="add-cart" onClick={()=> addCart(product)}>ADD TO BASKET</button>
                                    </div>
                                    <div className="frame-3">
                                        <h5 className="fs-5 fw-bold text-center text-capitalize">{product.title}</h5>
                                        <h5 className="fs-6 fw-bold text-center second-text-color text-capitalize">{product.category}</h5>
                                        <div className="prices">
                                            <h5 className="fs-6 fw-bold text-center muted-color">{USDollar.format(product.price)}</h5>
                                            <h5 className="fs-6 fw-bold text-center secondary-text-color">{USDollar.format(product.discountPercentage)}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>).slice(0, 8)

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CartItemCard