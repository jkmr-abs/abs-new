import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';
import { navItems } from './navigation';

function Navbar({ activeSection, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (id) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />
        <nav className={`desktop-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item, index) => (
            <button
              className={`nav-link ${activeSection === item.id ? 'is-active' : ''}`}
              key={item.id}
              onClick={() => navigate(item.id)}
            >
              <span className="nav-index">0{index + 1}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <button className="header-cta" onClick={() => navigate('footer')}>
          Start a project <ArrowUpRight size={15} strokeWidth={1.7} />
        </button>
        <button
          className="mobile-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
