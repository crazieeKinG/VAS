import { Button, Col, Divider, Row, Typography } from "antd";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AuthContext, AuthUser } from "../../AuthContext";
import { RootState } from "../../store/store";
import "./home.css";

export const Home = () => {
    const username = useSelector((state: RootState) => state.login.username);

    return (
        <div className="home">
            <Typography.Title level={3}>Welcome! {username}</Typography.Title>
        </div>
    );
};
