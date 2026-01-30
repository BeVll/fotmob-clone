import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MatchDetailsPage from "../pages/MatchDetailsPage";

export default function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/matchDetails" element={<MatchDetailsPage />} />
    </Routes>
  );
}
