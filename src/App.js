import "bootstrap/dist/css/bootstrap.min.css";
import '@coreui/coreui/dist/css/coreui.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LandingPage from "./views/LandingPage";
import CheckOut from "./views/CheckOut";
import {useState} from "react";
import SuccessModal from "./components/modal/SuccessModal";

function App() {
    const [id, setId] = useState();
    const [products, setProducts] = useState({});
    const [cart, setCart] = useState([]);
    const [product, setProduct] = useState("");
    const changeProduct = (response) => {
        setProduct(JSON.parse(response))
    }
    const changeId = (newId) => {
        setId(newId)
    }
    const changeProducts = (response) => {
        setProducts(JSON.parse(response))
    }
    const addCart = (item) => {
        setCart(cart => cart.concat(item));
        console.log(document.querySelector('#modal-container'))
        document.querySelector('#modal-container').style.opacity = 1;
        setTimeout(()=>{
            document.querySelector('#modal-container').style.display = "flex";
        }, 500)
    }
    return (
        <div className="App">
            <AnimatePresence>
                <BrowserRouter>
                    <Routes>
                        <Route path="/">
                            <Route path="/" element={<LandingPage products={products} changeId={changeId} changeProduct={changeProduct} addCart={addCart} cart={cart} changeProducts={changeProducts}/>}/>
                            <Route path="/check-out/:id" element={<CheckOut products={products} changeProduct={changeProduct} changeId={changeId} addCart={addCart} cart={cart} changeProducts={changeProducts} product={product}/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
                <SuccessModal product={product}/>
            </AnimatePresence>

        </div>
      )
    }

export default App;
