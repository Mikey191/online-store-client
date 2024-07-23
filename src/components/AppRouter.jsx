import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";

const AppRouter = () => {
  const isAuth = false;
  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, Component }) => {
          console.log("auth ", path);
          return <Route key={path} path={path} element={<Component />} />;
        })}
      {publicRoutes.map(({ path, Component }) => {
        console.log("public ", path);
        return <Route key={path} path={path} element={<Component />} />;
      })}
      <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;
