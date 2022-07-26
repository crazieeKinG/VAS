import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Login } from "../pages/login/Login";

export const RoutesPath = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="*" element={<div>No page</div>}></Route>
            </Routes>
        </BrowserRouter>
    );
};
