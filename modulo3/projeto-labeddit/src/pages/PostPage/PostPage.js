import React, { useEffect } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import CreateComment from "./CreateComment";
import { CommentCard } from "./styledPostPage";

const PostPage = () =>{
    useProtectedPage()
    const params = useParams();
    const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)


    const commentsList = comments?.map((comment) =>{
        return (
            <CommentCard key={comment.id}>
                <p>Enviado por: {comment.username}</p>
                <h3>{comment.body}</h3>
            </CommentCard>
        )
    })
    
    return (
        <div>
            <CreateComment/>
            {commentsList}
        </div>
    )
}

export default PostPage;