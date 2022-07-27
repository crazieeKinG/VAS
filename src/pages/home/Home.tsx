import { Col } from "antd";
import { Link } from "react-router-dom";
import "./home.css";

export const Home = () => {
    return (
        <div className="container">
            <div className="home">
                <Col span={6}>
                    <h1>Welcome!</h1>
                </Col>
                <Col span={6}>
                    <Link to="/login">Proceed to Login</Link>
                </Col>
            </div>
        </div>
    );
};
