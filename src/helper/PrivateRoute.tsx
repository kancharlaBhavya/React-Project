import React from 'react';
import { useKeycloak } from '@react-keycloak/web';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps): JSX.Element | null => {
  const { keycloak } = useKeycloak();
  const isLoggedIn = keycloak.authenticated;

  return isLoggedIn ? <>{children}</> : null;
};

export default PrivateRoute;
