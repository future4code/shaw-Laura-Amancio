import app from "./app";
import UserBusiness from "./business/UserBusiness";
import UserController from "./controller/UserController";
import UserData from "./data/UserData";
import { Authenticator } from "./services/Authenticator";
import { HashManage } from "./services/HashManage";
import { IdGenerator } from "./services/IdGenerate";

const userBusiness = new UserBusiness(
    new Authenticator(),
    new UserData(),
    new IdGenerator(),
    new HashManage()
)

const userController = new UserController(userBusiness)

app.post("/users/signup", userController.signup)
app.post("/users/login", userController.login)