import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../themes/golden.css';
import '../themes/light.css';
import '../themes/dark.css';
import '../themes/red.css';

const ThemeSwitcher = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let theme = 'golden';

    if (path === '/light') {
      theme = 'light';
    } else if (path === '/dark') {
      theme = 'dark';
    } else if (path === '/red') {
      theme = 'red';
    }

    document.body.classList.remove('theme-golden', 'theme-light', 'theme-dark', 'theme-red');

    document.body.classList.add(`theme-${theme}`);
  }, [location]);

  return null; 
};

export default ThemeSwitcher;