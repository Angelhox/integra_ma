import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
const MainLayout = () => {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {" "}
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <main
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "20px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Outlet /> {/* Aquí se renderizan las páginas */}
      </main>
    </div>
  );
};
export default MainLayout;
