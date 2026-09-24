import { ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { navItems } from './navigation';

function Footer({ onNavigate }) {
  return (
    <section id="footer" className="footer-section">
      <div className="footer-topline"><span>06 / 06</span><span>Let’s make something matter.</span></div>
      <div className="footer-content">
        <div className="footer-intro">
          <div className="section-kicker"><span>06</span><i />Get in touch</div>
          <h2>Have a good<br /><em>feeling?</em></h2>
          <a className="footer-email" href="mailto:hello@abs.studio">hello@abs.studio <ArrowUpRight size={18} /></a>
        </div>
        <div className="footer-links">
          <div className="footer-column"><span className="footer-label">Explore</span>{navItems.map((item) => <button key={item.id} onClick={() => onNavigate(item.id)}>{item.label}</button>)}</div>
          <div className="footer-column"><span className="footer-label">Elsewhere</span><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={14} /></a></div>
        </div>
      </div>
      <div className="footer-bottom"><div className="footer-brand"><Logo /><span>45 Walker Street<br />New York, NY 10013</span></div><span>© 2024 ABS Studio. All rights reserved.</span><span>New York · London · Everywhere</span></div>
    </section>
  );
}

export default Footer;
