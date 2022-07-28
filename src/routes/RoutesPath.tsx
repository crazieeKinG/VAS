import { NavLink } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { HOME, LOGIN, LOGOUT, NO_PAGE } from "../constants/navLinkConstants";
import { Home } from "../pages/home/Home";
import { Login } from "../pages/login/Login";
import { Logout } from "../pages/logout/Logout";

export const RoutesPath = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={HOME} element={<Navbar />}>
                    <Route index element={<Home />}></Route>
                </Route>
                <Route path={LOGIN} element={<Login />}></Route>
                <Route path={LOGOUT} element={<Logout />}></Route>
                <Route path={NO_PAGE} element={<div>No page</div>}></Route>
            </Routes>
        </BrowserRouter>
    );
};
