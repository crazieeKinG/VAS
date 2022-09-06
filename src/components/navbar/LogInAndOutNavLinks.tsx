import { Button } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOGIN, LOGOUT } from "../../constants/navLinkConstants";
import { RootState } from "../../store/store";

export const LogInAndOutNavLinks = () => {
    const authentication = useSelector((state: RootState) => state.login.data.accessToken);

    if (!authentication)
        return (
            <Link to={LOGIN}>
                <Button type="dashed">Login</Button>
            </Link>
        );
    else
        return (
            <Link to={LOGOUT}>
                <Button type="dashed">Logout</Button>
            </Link>
        );
};
