import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./pages/Register";
import LoginPage from "./pages/Login";
import HomePage from "./pages/HomePage";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
