import React, { useState, useEffect } from 'react';

// Header component
// - Uses Bootstrap navbar markup for responsive navigation
// - Tracks scroll to add `.scrolled` and to highlight active section
export default function Header({ onNavigate, theme, toggleTheme }) {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');

  const menus = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services', submenu: ['Design', 'Development', 'Support'] },
    { id: 'expertise', label: 'Expertise' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`lb-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid lb-header-inner">
          <a className="navbar-brand d-flex align-items-center" href="#" onClick={(e) => { e.preventDefault(); onNavigate('hero'); }}>
            <div className="lb-logo-mark">MB</div>
            <div className="lb-logo-text ms-2">Maya Biotech</div>
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#lbNavbar" aria-controls="lbNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="lbNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              {menus.map((m) => (
                <li className="nav-item" key={m.id} onMouseEnter={() => setOpenSubmenu(m.id)} onMouseLeave={() => setOpenSubmenu(null)}>
                  <a className={`nav-link ${active === m.id ? 'active' : ''}`} href={`#${m.id}`} onClick={(e) => { e.preventDefault(); onNavigate(m.id); setActive(m.id); }}>
                    {m.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="d-flex align-items-center">
              <button className="btn btn-link text-decoration-none theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
