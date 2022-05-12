import {BASE_URL} from "../constants/urls"
import axios from "axios";

export const createPost = (body, clear, headers, setIsLoading) =>{
    setIsLoading(true)
    axios.post(`${BASE_URL}/posts`, body, headers)
    .then((res) =>{
        clear()
        setIsLoading(false)
        alert(res.data)
    })
    .catch((err) =>{
        clear()
        setIsLoading(false)
        alert(err.response.data)
    })
}

export const createComment = (body, clear, headers, id, setIsLoading) =>{
    setIsLoading(true)
    axios.post(`${BASE_URL}/posts/${id}/comments`, body, headers)
    .then((res) =>{
        alert(res.data)
        setIsLoading(false)
        clear()
    })
    .catch((err) =>{
        alert(err.response.data)
        clear()
        setIsLoading(false)
    })
}