import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import LightTheme from '../pages/LightTheme';
import DarkTheme from '../pages/DarkTheme';
import RedTheme from '../pages/RedTheme';
import ThemeSwitcher from '../components/ThemeSwitcher';

const AppRoutes = () => {
  return (
    <Router>
      <ThemeSwitcher />
      <Routes>
        {/* Редірект з '/' на '/golden' */}
        <Route path="/" element={<Navigate to="/golden" replace />} />

        <Route path="/golden" element={<Home />} />
        <Route path="/light" element={<LightTheme />} />
        <Route path="/dark" element={<DarkTheme />} />
        <Route path="/red" element={<RedTheme />} />

        {/* 404 Сторінка */}
        <Route path="*" element={<h1>404 - Сторінка не знайдена</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;