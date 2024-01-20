import Love from "../../images/dark-love.svg";
import Compare from "../../images/compare.svg"
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
const PRODUCT_URL = "/products";
const ProductCard = ({products, changeProduct, changeId, addCart}) => {
    let [cart, setCart] = useState([])
    const [count, setCount] = useState(10);
    const navigate = useNavigate();
    const increaseCount = () => {
        setCount(count + 5)
    }
    let JSONProjects = JSON.parse(products)
    useEffect(() => {
        console.log(JSONProjects)
    })
    function isObjEmpty (obj) {
        return Object.keys(obj).length === 0;
    }
    const goToSingleProduct = (id) => {
        changeId(id);
        navigate(`/check-out/${id}`);
    }
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    const  fetchProduct = async() => {
        try {
            axios.get('https://dummyjson.com/products')
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
    }, [products]);
    return(
        <div className="main-container">
            <div className="container">
                <div className="row h-auto">
                    <div className="main-content">
                        <h2 className="second-text-color">Featured Products</h2>
                        <h3>BESTSELLER PRODUCTS</h3>
                        <p>Problems trying to resolve the conflict between </p>
                    </div>
                </div>
                <div className="row w-85 h-100">
                    <div className="product tab tab-group">
                        <div className="tab-content">
                            <div className="tab-one">
                                <div className="row flex-wrap">
                                    {
                                        !isObjEmpty(JSONProjects) && JSONProjects.products.map((product, index) => <div className="col-md-3" key={index}>
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
                                        </div>).slice(0, count)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="button-md" onClick={increaseCount}>
                    LOAD MORE PRODUCTS
                </button>
            </div>
        </div>
    )
}
export default ProductCard