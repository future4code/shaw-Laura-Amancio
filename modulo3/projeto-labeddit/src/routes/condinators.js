export const goToCadastroPage = (navigate) =>{
    navigate("/cadastro")
}

export const goToFeedPage = (navigate) =>{
    navigate("/")
}

export const goToLoginPage = (navigate) =>{
    navigate("/login")
}

export const goToPostPage = (navigate, id) =>{
    navigate(`/post/${id}`)
}