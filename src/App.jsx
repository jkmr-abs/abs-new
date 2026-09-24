import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  const mainRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return undefined;

    const sections = root.querySelectorAll('section[id]');
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) setActiveSection(visible.target.id);
    }, { root, threshold: [0.5, 0.75] });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navigate = (id) => {
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div data-component="AppShell" className="h-screen w-screen overflow-hidden bg-abs-ink text-abs-text">
      <Navbar activeSection={activeSection} onNavigate={navigate} />
      <main data-component="ScrollContainer" className="scrollbar-none h-screen w-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scroll-smooth" ref={mainRef}>
        <Home onNavigate={navigate} />
      </main>
    </div>
  );
}

export default App;
