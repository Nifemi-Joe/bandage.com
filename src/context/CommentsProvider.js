import { createContext } from "react";

const CommentContext = createContext({});

export const CommentProvider = ({ comments, children }) => {
    return (
        <CommentContext.Provider value={comments}>
            {children}
        </CommentContext.Provider>
    );
};

export default CommentContext;
