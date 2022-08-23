import { AnswersController } from "./controller/AnswersController";
import { app } from "./app";
import PollsController from "./controller/PollsConroller";
import UserController from "./controller/UserController";

const userController = new UserController
const pollController = new PollsController
const answerController = new AnswersController

app.get("/polls/:poll_id", pollController.gelPollByID)
app.get("/polls/votes/:poll_id", answerController.getVotes)
app.get("/polls", pollController.getAllPolls)
app.post("/users/signup", userController.signUp)
app.post("/users/login", userController.login)
app.post("/polls", pollController.createPoll)
app.post("/polls/:poll_id", answerController.registerAnswer)
app.put("/polls/:poll_id", pollController.editPoll)
app.delete("/poll/:poll_id", pollController.deletePoll)