import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { HOME, LOGIN, LOGOUT, NO_PAGE, ADD_PATIENT, REGISTER_PATIENT, ADD_APPOINTMENT, LIST_APPOINTMENT } from "../constants/navLinkConstants";
import { Home } from "../pages/home/Home";
import { Login } from "../pages/login/Login";
import { Logout } from "../pages/logout/Logout";
import { CreateAppointment } from "../pages/manager/Appointment/CreateAppointment";
import { ListAppointment } from "../pages/manager/Appointment/ListAppointment";
import { CreatePatient } from "../pages/manager/Patient/CreatePatient";
import { UserRegistration } from "../pages/user/UserRegistration";

export const RoutesPath = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={HOME} element={<Navbar />}>
                    <Route index element={<Home />}></Route>
                    <Route path={ADD_PATIENT} element={<CreatePatient />}></Route>
                    <Route path={REGISTER_PATIENT} element={<UserRegistration />}></Route>
                    <Route path={ADD_APPOINTMENT} element={<CreateAppointment />}></Route>
                    <Route path={LIST_APPOINTMENT} element={<ListAppointment />}></Route>
                </Route>
                <Route path={LOGIN} element={<Login />}></Route>
                <Route path={LOGOUT} element={<Logout />}></Route>
                <Route path={NO_PAGE} element={<div>No page</div>}></Route>
            </Routes>
        </BrowserRouter>
    );
};
