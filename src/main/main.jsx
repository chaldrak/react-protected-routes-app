import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import HomePage from "../pages/HomePage";
import { useState } from "react";
import PrivateRoutes from "../components/authentication/PrivateRoutes";
import NotFound from "../pages/NotFound";
import RequiredAuth from "../components/authentication/RequiredAuth";
import { AuthProvider } from "../context/AuthProvider";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Protected routes */}
          <Route element={<RequiredAuth />}>
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>

          {/* Catch all routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
