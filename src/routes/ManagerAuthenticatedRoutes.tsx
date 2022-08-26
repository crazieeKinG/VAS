import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ManagerNavbar } from "../components/navbar/ManagerNavbar";
import { UserNavbar } from "../components/navbar/UserNavbar";
import { LOGIN, MANAGER_LOGIN } from "../constants/navLinkConstants";
import { RootState } from "../store/store";

export const ManagerAuthenticatedRoutes = () => {
    const authentication = useSelector((state: RootState) => state.login.data);

    return authentication.token && authentication.isAdmin ? (
        <ManagerNavbar />
    ) : (
        <Navigate to={MANAGER_LOGIN} />
    );
};
