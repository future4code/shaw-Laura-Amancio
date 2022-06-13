type user = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}

type posts = {
    id: number,
    title: string,
    body: string,
    userId: number
}

export const usuarios: user[] = [
    {
        id: 1,
        name: 'laura',
        phone: 75849632,
        email: 'laura@lau.com',
        website: 'https://www.linkedin.com/in/laura-amancio-9b3b8b168/'
    },
    {
        id: 2,
        name: 'roberval',
        phone: 75847432,
        email: 'rob@roro.com',
        website: 'twitter.com'
    },
    {
        id: 3,
        name: 'cida',
        phone: 45219632,
        email: 'cidinha@cida.com',
        website: 'instagram.com'
    },
    {
        id: 4,
        name: 'joana',
        phone: 758410632,
        email: 'joana@jo.com',
        website: 'facebook.com'
    }
]

export const postsUser: posts[] = [
    {
        userId: 1,
        id: 1,
        title: "amo abacate",
        body: "abacate é uma fruta muito versátil",
    },
    {
        userId: 1,
        id: 2,
        title: "amo acerola",
        body: "acerola é uma fruta muito versátil",
    },
    {
        userId: 2,
        id: 1,
        title: "amo manga",
        body: "manga é uma fruta muito versátil",
    },
    {
        userId: 4,
        id: 1,
        title: "amo tomate",
        body: "tomate é uma fruta muito versátil",
    },
]

//acho melhor fazer separado pois fica mais organizado o que é usuário e o que são posts, nesse caso que são poucas informações, o acesso a essas infos fica mais fácil
// Além disso, nesse caso temos o userId no próprio corpo dos objetos posts, então facilita o acesso