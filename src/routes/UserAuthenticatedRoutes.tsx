import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { UserNavbar } from "../components/navbar/UserNavbar";
import { LOGIN } from "../constants/navLinkConstants";
import { RootState } from "../store/store";

export const UserAuthenticatedRoutes = () => {
    const authentication = useSelector(
        (state: RootState) => state.login.data.token
    );

    return authentication ? <UserNavbar /> : <Navigate to={LOGIN} />;
};
