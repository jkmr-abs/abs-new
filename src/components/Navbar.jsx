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
    <header data-component="GlobalHeader" className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.09] bg-[rgba(5,6,8,0.66)] backdrop-blur-[18px]">
      <div className="mx-auto flex h-16 w-[88vw] items-center lg:h-[76px] lg:w-[89vw]">
        <Logo />
        <nav data-component="PrimaryNavigation" className={`absolute left-0 right-0 top-16 hidden flex-col items-stretch gap-0 border-b border-white/10 bg-[rgba(5,6,8,0.96)] px-[6vw] pb-[18px] pt-3 lg:static lg:ml-auto lg:flex lg:flex-row lg:items-center lg:gap-[clamp(20px,2.6vw,42px)] lg:border-0 lg:bg-transparent lg:p-0 lg:pr-[clamp(24px,4vw,68px)] ${menuOpen ? '!flex' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              className={`flex items-center justify-between border-b border-white/[0.06] py-[13px] text-[13px] tracking-[0.04em] text-abs-muted transition hover:text-abs-text lg:justify-start lg:gap-[7px] lg:border-0 lg:py-2 lg:text-xs ${activeSection === item.id ? 'text-abs-orange lg:text-abs-orange' : ''}`}
              key={item.id}
              onClick={() => navigate(item.id)}
            >
              <span className="order-2 text-[9px] tracking-normal text-white/30 lg:order-none">{item.number}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <button className="ml-auto hidden items-center gap-2 rounded-full border border-abs-orange/55 bg-abs-orange/[0.08] px-4 py-[11px] text-[11px] tracking-[0.025em] text-abs-orange-soft transition hover:bg-abs-orange hover:text-abs-ink lg:flex" onClick={() => navigate('footer')}>
          Start a project <ArrowUpRight size={15} strokeWidth={1.7} />
        </button>
        <button className="ml-auto bg-transparent p-2 text-abs-text lg:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
