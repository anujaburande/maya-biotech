import React from 'react';

// Floating theme toggle button
// - `theme` is either 'light' or 'dark'
// - `toggleTheme` flips the theme
export default function FloatingThemeToggle({ theme = 'light', toggleTheme }) {
  return (
    <div className="lb-theme-toggle">
      <button onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </div>
  );
}
