import Dashboard from "@pages/Dashboard/Dashboard";
import Security from '@pages/Security/Security'
import { lazy } from 'react';

  export   const  HOME =   'Anasayfa';
export const DASHBOARD = 'Panel';
export const SECURITY = 'Güvenlik';

export enum ClientRoutes {
  INDEX = '/',
  DASHBOARD = '/dashboard',
  SECURITY = '/security',
  ALL_ROUTES = '/*',
}

export const appRoutes: Route[] = [
  {
    id: '1',
    path: ClientRoutes.INDEX,
    name: HOME,
    showOnNavigation: false,
    isPrivate: false,
    Component: lazy(() => import('@pages/Index/Index')),
  },
  {
    id: '2',
    path: ClientRoutes.SECURITY,
    name: SECURITY,
    showOnNavigation: false,
    isPrivate: false,
    Component: Security,
  },
  {
    id: '3',
    path: ClientRoutes.DASHBOARD,
    name: DASHBOARD,
    showOnNavigation: true,
    isPrivate: true,
    Component: Dashboard,
  },
];
