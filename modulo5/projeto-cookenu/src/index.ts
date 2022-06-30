import app from "./app";
import login from "./endpoints/login";
import createUser from "./endpoints/signupUser";

app.post("/users/signup", createUser)
app.post("/users/login", login)