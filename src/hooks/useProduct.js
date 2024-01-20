import { useContext } from "react";
import ProductContext from "../context/ProductProvider";

const useProduct = () => {
    const {products, changeProduct} = useContext(ProductContext);
    return useContext(ProductContext);

};

export default useProduct;