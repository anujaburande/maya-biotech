import React, { useState, useEffect } from 'react';
import FloatingThemeToggle from './FloatingThemeToggle';

// Header component
// - Renders logo, menus and simple submenus
// - Calls `onNavigate(id)` when a menu is clicked to perform JS smooth scroll
// - Receives `theme` and `toggleTheme` to control the light/dark mode
export default function Header({ onNavigate, theme, toggleTheme }) {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = document.documentElement.scrollHeight * 0.003; // 0.3%
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const menus = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services', submenu: ['Design', 'Development', 'Support'] },
    { id: 'expertise', label: 'Expertise' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`lb-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="lb-header-inner">
        <div className="lb-logo" onClick={() => onNavigate('hero')}>
          <div className="lb-logo-mark">MB</div>
          <div className="lb-logo-text">Maya Biotech</div>
        </div>

        <nav className="lb-nav">
          {menus.map((m) => (
            <div
              key={m.id}
              className="lb-nav-item"
              onMouseEnter={() => setOpenSubmenu(m.id)}
              onMouseLeave={() => setOpenSubmenu(null)}
            >
              <button className="lb-nav-link" onClick={() => onNavigate(m.id)}>
                {m.label}
              </button>
              {m.submenu && openSubmenu === m.id && (
                <div className="lb-submenu">
                  {m.submenu.map((s) => (
                    <button key={s} className="lb-submenu-item" onClick={() => alert(`${s} clicked`)}>
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="lb-header-actions">
          <button className="lb-cta" onClick={() => onNavigate('contact')}>Get in touch</button>
        </div>
      </div>

      {/* Floating theme toggle placed here so it's always available with header markup */}
      <FloatingThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </header>
  );
}
