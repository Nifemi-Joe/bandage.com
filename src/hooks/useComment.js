import { useContext } from "react";
import CommentContext from "../context/CommentsProvider";
const useComment = () => {
    const {comments, changeComments} = useContext(CommentContext);
    return useContext(CommentContext);

};

export default useComment;