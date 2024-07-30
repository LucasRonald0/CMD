import React from "react";

import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Home from "../components/home";







const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/home" element={<Home/>} />
                
               

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;