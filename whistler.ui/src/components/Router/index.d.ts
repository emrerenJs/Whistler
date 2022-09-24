type ClientRoutes = import('@components/Router/router.constants').ClientRoutes;

interface Route {
  id: string;
  path: ClientRoutes;
  name: string;
  showOnNavigation: boolean;
  isPrivate: boolean;
  Component: ReactLazyComponent;
}

interface PrivateRouteProps {
  children: ReactComponent;
}

interface PublicRouteProps {
  children: ReactComponent;
}
