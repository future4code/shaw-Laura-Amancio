import express from "express";
import cors from "cors"
import {usuarios, postsUser} from "./data"


const app = express()

app.use(express.json())
app.use(cors())

//PEGAR USUÁRIOS:
app.get('/usuarios', (req, res) =>{
    const users = usuarios.map((usuario) => {
        return usuario
    })
    res.send(users)
})

//PEGAR POSTS:
app.get('/posts', (req, res) => {
    const posts = postsUser.map((post) => {
        return post
    })
    res.send(posts)
})

//PEGAR POST DE USUÁRIO ESPECÍFICO:
app.get('/posts/:userId', (req, res) => {
    const userId = parseInt(req.params.userId)

    const pegaPost = postsUser.filter((post) => {
        if(post.userId === userId){
            return post
        }else{
            res.status(404)
            res.send('id não encontrado')
        }
    })

    res.send(pegaPost)
})

app.listen(3003, () => {
    console.log("Ta rodando")
})