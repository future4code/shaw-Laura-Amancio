import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import AdminHomePage from "../pages/AdminHomePage";
import CreateTripPage from "../pages/CreateTripPage";
import ListTripPage from "../pages/ListTripsPage";
import LoginPage from "../pages/LoginPage";
import TripDetailsPage from "../pages/TripDetailsPage";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element= { <HomePage/> }/>
                <Route path="/trips/list" element={ <ListTripPage/> } />
                <Route path= "/trips/application" element={ <ApplicationFormPage/> } />
                <Route path= "/login" element={ <LoginPage/> }/>
                <Route path="/admin/trips/list" element={ <AdminHomePage/> }/>
                <Route path="/admin/trips/create" element={ <CreateTripPage/> }/>
                <Route path="/admin/trips/:id" element={ <TripDetailsPage/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;