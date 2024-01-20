import { createContext } from "react";

const ProductContext = createContext({});

export const ProductProvider = ({ products, children }) => {
    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContext;
