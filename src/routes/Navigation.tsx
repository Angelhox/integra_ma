import { HashRouter, Route, Routes } from "react-router-dom";
import { SplashScreen } from "../pages/SplashScreen";
import { Login } from "../pages/Login";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashboard";
import { Settings } from "../pages/Settings";
import Products from "../pages/Products";

export const Navigation = () => {
  return (
    <HashRouter>
      <Routes>
        {/* 1. Páginas independientes (Sin Sidebar) */}
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />

        {/* 2. Rutas con Layout (Con Sidebar) */}
        <Route path="/main" element={<MainLayout />}>
          {/* El 'index' hace que /main muestre el Dashboard por defecto */}
          <Route index element={<Dashboard />} />

          {/* NOTA: Sin "/" al principio para que sean relativas a /main */}
          <Route path="settings" element={<Settings />} />
          <Route path="productos" element={<Products />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
