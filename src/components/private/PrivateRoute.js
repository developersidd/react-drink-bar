import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { allContext: { user: { email, displayName } } } = useAuth();
    const location = useLocation();

    return email || displayName ? <Outlet /> : <Navigate to="/login" state={{ from: location }} />
}

export default PrivateRoute
