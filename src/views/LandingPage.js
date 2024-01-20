import ContactNavBar from "../components/bar/ContactNavBar";
import ShopCard from "../components/card/ShopCard";
import ProductCard from "../components/card/ProductCard";
import FeaturesCard from "../components/card/FeaturesCard";
import BlogCard from "../components/card/BlogCard";
import TestimonialCard from "../components/card/TestimonialCard";
import CTACard from "../components/card/CTACard";
import TheFooter from "../components/footer/TheFooter";
import {useState} from "react";
import MainNavBar from "../components/bar/MainNavBar";

const LandingPage = ({changeId, products, changeProduct, addCart, cart}) => {
    const [posts, setPosts] = useState({});
    const [comments, setComments] = useState({});
    const [padding, setPadding] = useState(false);
    const changePosts = (response) => {
        setPosts(JSON.parse(response))
    }
    const changeComments = (response) => {
        setComments(JSON.parse(response))
    }
    return(
        <div>
            <nav className="navbar-style-8">
                <ContactNavBar padding={padding}/>
                <MainNavBar padding={padding} cart={cart}/>
            </nav>
            <ShopCard/>
            <ProductCard products={JSON.stringify(products)} changeProduct={changeProduct} changeId={changeId} addCart={addCart}/>
            <FeaturesCard/>
            <BlogCard posts={JSON.stringify(posts)} changePosts={changePosts}/>
            <TestimonialCard comments={JSON.stringify(comments)} changeComments={changeComments}/>
            <CTACard/>
            <TheFooter padding={padding}/>
        </div>


    )
}
export default LandingPage