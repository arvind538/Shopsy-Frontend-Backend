import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Store/auth";

const Logout = () => {
    const { LogoutUser } = useAuth();

    useEffect(() => {
        LogoutUser();
    }, []); // sirf ek baar call

    return <Navigate to="/login" replace />;
};

export default Logout;
