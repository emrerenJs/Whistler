import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from '@components/Router/components/PrivateRoute/PrivateRoute';
import PublicRoute from '@components/Router/components/PublicRoute/PublicRoute';
import { appRoutes, ClientRoutes } from '@components/Router/router.constants';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {appRoutes.map((appRoute) => {
          const { Component, isPrivate, id, path } = appRoute;
          return (
            <Route
              key={id}
              path={path}
              element={
                isPrivate ? (
                  <PrivateRoute>
                    <Component />
                  </PrivateRoute>
                ) : (
                  <PublicRoute>
                    <Component />
                  </PublicRoute>
                )
              }
            ></Route>
          );
        })}
        <Route
          path={ClientRoutes.ALL_ROUTES}
          element={<Navigate to={ClientRoutes.DASHBOARD} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}
