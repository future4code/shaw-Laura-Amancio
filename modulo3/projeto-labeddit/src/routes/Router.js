import React from "react";
import { Routes, Route } from "react-router-dom";
import CadastroPage from "../pages/CadastroPage/CadastroPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";

const Router = ({setRightButton}) => {
  return (
      <Routes>
        <Route path="/login" element={<LoginPage setRightButton={setRightButton}/>} />
        <Route path="/cadastro" element={<CadastroPage setRightButton={setRightButton} />} />
        <Route path="/" element={<FeedPage />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
  );
};

export default Router;
