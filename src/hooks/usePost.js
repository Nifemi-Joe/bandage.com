import { useContext } from "react";
import PostContext from "../context/PostsProvider";
const useProduct = () => {
    const {posts, changePosts} = useContext(PostContext);
    return useContext(PostContext);

};

export default useProduct;