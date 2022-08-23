import React from "react";
import {Routes, Route} from "react-router-dom"
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FeedPage from "../pages/FeedPage/FeedPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import VotePage from "../pages/VotePage/VotePage"
import EditPollPage from "../pages/EditPollPage/EditPollPage";

const Router = ({setRightButtonText}) => {
    return (
            <Routes>
                <Route path={"/"} element={ <FeedPage/> } />
                <Route path={"/login"} element={ <LoginPage setRightButtonText={setRightButtonText}/> } />
                <Route path={"/signup"} element={ <SignUpPage setRightButtonText={setRightButtonText}/> } />
                <Route path={"/votacao/:id"} element={ <VotePage/> } />
                <Route path={"/votacao/edit/:id"} element={ <EditPollPage/> } />
                <Route path="*" element={<ErrorPage/>} />
            </Routes>
    )
}

export default Router