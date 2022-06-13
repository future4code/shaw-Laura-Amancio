type Afazeres = {
    userId: number,
    id: number,
    title: string,
    completed: boolean | string
}

export const listaAfazeres: Afazeres[] = [
    {
        userId: 1,
        id: 1,
        title: "correr",
        completed: true
    },
    {
        userId: 1,
        id: 2,
        title: "comer",
        completed: false
    },
    {
        userId: 3,
        id: 3,
        title: "jogar",
        completed: true
    },
    {
        userId: 4,
        id: 4,
        title: "voar",
        completed: false
    }
]