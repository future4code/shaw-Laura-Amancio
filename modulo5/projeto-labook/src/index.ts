import app from "./app";
import PostBusiness from "./business/PostBusiness";
import UserBusiness from "./business/UserBusiness";
import PostController from "./controller/PostController";
import UserController from "./controller/UserController";
import PostData from "./data/PostData";
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

const postBusiness = new PostBusiness(
    new Authenticator,
    new IdGenerator,
    new PostData
)

const postController = new PostController(postBusiness)

app.post("/users/signup", userController.signup)
app.post("/users/login", userController.login)
app.post("/users/post/:creator_id", postController.createPost)
app.get("/users/post/:id", postController.getByID)