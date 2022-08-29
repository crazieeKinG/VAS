import { Typography } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loggedOut } from "../../store/slice/authenticationSlice";
import { RootState } from "../../store/store";

export const Logout = () => {
    const navigate = useNavigate();
    const authentication = useSelector((state: RootState) => state.login.data);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(loggedOut());
        navigate("/");
    };

    useEffect(() => {
        handleLogout();
    }, []);

    return (
        <div className="container">
            <Typography.Title>
                Logging out user {authentication.username} ...
            </Typography.Title>
        </div>
    );
};
