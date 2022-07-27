import { Typography } from "antd";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext";

export const Logout = () => {
    const navigate = useNavigate();
    const authentication = { ...useContext(AuthContext) };

    const handleLogout = () => {
        localStorage.removeItem("userDetails");

        authentication.setAuth?.({
            username: "",
            isLoggedIn: false,
        });

        navigate("/");
    };

    useEffect(() => {
        handleLogout();
    }, []);

    return (
        <div className="container">
            <Typography.Title>
                Logging out user {authentication.auth?.username} ...
            </Typography.Title>
        </div>
    );
};
