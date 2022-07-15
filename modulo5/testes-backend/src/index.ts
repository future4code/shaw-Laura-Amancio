import { UserController } from "./controller/UserController";
import app from "./app";
import UserDatabase from "./data/UserDatabase";

const userController = new UserController(new UserDatabase)

app.get("/users/profile/:id", userController.getUserByID)