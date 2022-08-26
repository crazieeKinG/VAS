import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserNavbar } from "../components/navbar/UserNavbar";
import * as route from "../constants/navLinkConstants";
import { AppointmentList } from "../pages/Appointment/AppointmentList";
import { ScheduleAppointment } from "../pages/Appointment/ScheduleAppointment.";
import { Home } from "../pages/home/Home";
import { Login } from "../pages/login/Login";
import { ManagerLogin } from "../pages/login/ManagerLogin";
import { Logout } from "../pages/logout/Logout";
import { PatientList } from "../pages/Patient/PatientList";
import { Register } from "../pages/Patient/Register";
import { VaccineList } from "../pages/Vaccine/VaccineList";
import { VaccineRegister } from "../pages/Vaccine/VaccineRegister";
import { RootState } from "../store/store";
import { ManagerAuthenticatedRoutes } from "./ManagerAuthenticatedRoutes";
import { UserAuthenticatedRoutes } from "./UserAuthenticatedRoutes";

export const RoutesPath = () => {
    const title = useSelector((state: RootState) => state.navbar.data.title);

    useEffect(() => {
        document.title = title;
    }, [title]);
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path={route.HOME} element={<UserNavbar />}>
                    <Route index element={<Home />}></Route>
                    <Route
                        path={route.REGISTER_PATIENT}
                        element={<Register />}
                    />
                </Route>

                <Route path={route.HOME} element={<UserAuthenticatedRoutes />}>
                    <Route
                        path={route.SCHEDULE_APPOINTMENT}
                        element={<ScheduleAppointment />}
                    />
                    <Route
                        path={route.PATIENT_APPOINTMENT}
                        element={<AppointmentList />}
                    />
                </Route>
                <Route
                    path={route.MANAGER}
                    element={<ManagerAuthenticatedRoutes />}
                >
                    <Route path={route.ADD_PATIENT} element={<Register />} />
                    <Route path={route.UPDATE_PATIENT} element={<Register />} />
                    <Route
                        path={route.LIST_PATIENT}
                        element={<PatientList />}
                    />
                    <Route
                        path={route.ADD_APPOINTMENT}
                        element={<ScheduleAppointment />}
                    />
                    <Route
                        path={route.UPDATE_APPOINTMENT}
                        element={<ScheduleAppointment />}
                    />
                    <Route
                        path={route.LIST_APPOINTMENT}
                        element={<AppointmentList />}
                    />
                    <Route
                        path={route.ADD_VACCINATION}
                        element={<VaccineRegister />}
                    />
                    <Route
                        path={route.UPDATE_VACCINATION}
                        element={<VaccineRegister />}
                    />
                    <Route
                        path={route.LIST_VACCINATION}
                        element={<VaccineList />}
                    />
                </Route>

                <Route path={route.MANAGER_LOGIN} element={<ManagerLogin />} />
                <Route path={route.LOGIN} element={<Login />}></Route>
                <Route path={route.LOGOUT} element={<Logout />}></Route>

                <Route
                    path={route.NO_PAGE}
                    element={
                        <h1 className="container margin-top">Page Not Found</h1>
                    }
                ></Route>
            </Routes>
        </BrowserRouter>
    );
};
