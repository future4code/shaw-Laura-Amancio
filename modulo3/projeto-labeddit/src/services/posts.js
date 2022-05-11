import {BASE_URL} from "../constants/urls"
import axios from "axios";

export const createPost = (body, clear, headers) =>{
    axios.post(`${BASE_URL}/posts`, body, headers)
    .then((res) =>{
        clear()
        alert(res.data)
    })
    .catch((err) =>{
        console.log(err)
    })
}

export const createComment = (body, clear, headers, id) =>{
    axios.post(`${BASE_URL}/posts/${id}/comments`, body, headers)
    .then((res) =>{
        alert(res.data)
        clear()
    })
    .catch((err) =>{
        console.log(err)
    })
}