// import { Request, Response } from "express";
// import RecepieDatabse from "../data/RecepieDatabase";
// import { Authenticator } from "../services/Authenticator";

// export default async function deleteRecipe(req: Request, res: Response) {
//   try {
//     const token = req.headers.authorization
//     const id = req.params.id

//     if (!token) {
//       throw new Error("Token não informado, verificar login");
//     }

//     const data = new Authenticator();
//     const authorized = data.getData(token);

//     if (!authorized) {
//       throw new Error("Token inválido, verificar login");
//     }
    
//     const recipeDB = new RecepieDatabse()

//     if (authorized.role === "NORMAL") {
//         const authorRecipes = await recipeDB.getByAuthorId(authorized.id)
//         console.log(authorRecipes)

//         if(authorRecipes.length == 0){
//             throw new Error("Usuário não tem receitas publicadas");
//         }

//         const idRecipe = recipeDB.getById(id)
//         console.log(idRecipe)
//         res.send(authorRecipes)
        
//         // await recipeDB.deleteRecipe(id)
//     }

//     // await recipeDB.deleteRecipe(id)

//   } catch (error: any) {
//     res.send(error.sqlmessage || error.message)
//   }
// }
