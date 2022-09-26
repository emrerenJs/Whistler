import { Navigate } from 'react-router-dom';
import { ClientRoutes } from '../../router.constants';

export default function PrivateRoute(privateRouteProps: PrivateRouteProps) {
  const { children } = privateRouteProps;
  const isAuthenticated = false;
  if (isAuthenticated) {
    return <>{children}</>;
  }
  return <Navigate to={ClientRoutes.SECURITY} replace />;
}
