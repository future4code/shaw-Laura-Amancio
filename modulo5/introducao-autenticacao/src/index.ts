import app from "./app";
import createUser from "./endpoints/createUser";
import login from "./endpoints/login";

app.post("/users/signup", createUser)
app.post("/users/login", login)