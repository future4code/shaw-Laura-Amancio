import app from "./app";
import createUser from "./endpoints/createUser";
import getProfile from "./endpoints/getProfile";
import login from "./endpoints/login";

app.post("/users/signup", createUser)
app.post("/users/login", login)
app.get("/user/profile", getProfile)