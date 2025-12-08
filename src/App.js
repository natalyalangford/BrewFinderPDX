import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import CafeList from "./pages/CafeList";
import BeanList from "./pages/BeanList";
import Metrics from "./pages/Metrics";
import About from "./pages/About";

import "./styles/app.css";

export default function App() {
  return (
    <div className="app">
      <NavBar />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/beans" element={<BeanList />} />
          <Route path="/cafes" element={<CafeList />} />
          <Route path="/metrics" element={<Metrics />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </main>
    </div>
  );
}
