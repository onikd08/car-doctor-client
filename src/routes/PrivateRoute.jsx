import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (user?.email) {
    return children;
  }
  if (loading) {
    return <progress className="progress w-full"></progress>;
  }
  return <Navigate to={"/login"} state={location.pathname}></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PrivateRoute;
