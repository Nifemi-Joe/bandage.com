import ContactNavBar from "../components/bar/ContactNavBar";
import MainNavBar from "../components/bar/MainNavBar";
import ChevronGrey from "../images/chevron-grey.svg";
import CartItemCard from "../components/card/CartItemCard";
import {useState} from "react";
import ClientCard from "../components/card/ClientCard";
import TheFooter from "../components/footer/TheFooter";
import {ProductProvider} from "../context/ProductProvider";
import SuccessModal from "../components/modal/SuccessModal";
const CheckOut = ({products, changeId, addCart, cart, changeProduct, product}) => {
    const [padding, setPadding] = useState(true);
    return (
        <div className="check-out-container">
            <nav className="navbar-style-8 minus-199">
                <ContactNavBar padding={padding}/>
                <MainNavBar padding={padding} cart={cart}/>
            </nav>
            <div className="main-container minus-199 bg-grey">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="breadcrumb">
                                <a href="#">Home</a>
                                <div className="image-container">
                                    <img src={ChevronGrey} alt="Chevron Grey"/>
                                </div>
                                <h6 className="muted-color">Shop</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProductProvider>
                <CartItemCard product={product} changeProduct={changeProduct} products={products} changeId={changeId} addCart={addCart}/>
            </ProductProvider>
            <ClientCard/>
            <TheFooter padding={padding}/>
        </div>
    )
}
export default CheckOut