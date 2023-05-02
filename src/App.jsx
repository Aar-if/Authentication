import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./pages/Register";
import LoginPage from "./pages/Login";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/HomePage" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
