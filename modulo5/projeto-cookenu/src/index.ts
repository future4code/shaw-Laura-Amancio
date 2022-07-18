import app from "./app";
import createRecepie from "./endpoints/createRecepie";
import getOthersProfile from "./endpoints/getOthersProfile";
import getProfile from "./endpoints/getProfile";
import getRecipeByID from "./endpoints/getRecipe";
import login from "./endpoints/login";
import createUser from "./endpoints/signupUser";
import getAllRecipes from './endpoints/getAllRecipes'

app.get("/user/profile", getProfile)
app.get("/user/profile/:id", getOthersProfile)
app.get("/recipes/:id", getRecipeByID)
app.get("/feed/recipes", getAllRecipes)
app.post("/users/signup", createUser)
app.post("/users/login", login)
app.post("/user/recipe/:id", createRecepie)