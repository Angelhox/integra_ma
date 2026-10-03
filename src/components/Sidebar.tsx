import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Settings, Users, Menu, ChevronLeft, Blocks } from "lucide-react"; // Iconos
export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Inicio", path: "/main", icon: <Home size={20} /> },
    { name: "Productos", path: "/main/productos", icon: <Blocks size={20} /> },
    { name: "Configuración", path: "/main/settings", icon: <Settings size={20} /> },
    { name: "Splash", path: "/", icon: <Settings size={20} /> },
  ];
  return (
    <aside
      style={{
        width: isCollapsed ? "70px" : "240px",
        backgroundColor: "#1e1e1e",
        color: "white",
        transition: "width 0.3s ease",
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
      }}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        style={{
          alignSelf: isCollapsed ? "center" : "flex-end",
          marginBottom: "2rem",
          cursor: "pointer",
        }}
      >
        {isCollapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
      </button>

      <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px",
              borderRadius: "8px",
              textDecoration: "none",
              color: location.pathname === item.path ? "#646cff" : "white",
              backgroundColor:
                location.pathname === item.path ? "#2a2a2a" : "transparent",
              gap: "15px",
            }}
          >
            {item.icon}
            {!isCollapsed && <span>{item.name}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
};
