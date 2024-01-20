import { createContext } from "react";

const PostContext = createContext({});

export const PostsProvider = ({ posts, children }) => {
    return (
        <PostContext.Provider value={posts}>
            {children}
        </PostContext.Provider>
    );
};

export default PostContext;
