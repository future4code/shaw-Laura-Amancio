import { getAllUsers4 } from "./endpoints/ex4";
import { getAllUsers3 } from "./endpoints/ex3";
import { app } from "./app";
import { getAllUsers, getAllUsersB } from "./endpoints/ex1";
import { getAllUsers2 } from "./endpoints/ex2"

app.get("/users", getAllUsers)
app.get("/users/:type", getAllUsersB)
app.get("/users2", getAllUsers2)
app.get("/users3", getAllUsers3)
app.get("/users4", getAllUsers4)