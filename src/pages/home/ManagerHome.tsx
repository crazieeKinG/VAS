import { Navigate } from "react-router-dom";
import { LIST_APPOINTMENT } from "../../constants/navLinkConstants";

const ManagerHome = () => {
    return <Navigate to={LIST_APPOINTMENT} />;
};

export default ManagerHome;
