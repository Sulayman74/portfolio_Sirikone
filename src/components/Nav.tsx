import { useState, useEffect } from 'react';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent border-transparent'}`} id="nav">
      <div className="nav__inner">
        <a href="#hero" className="nav__logo">SKEOHAVONG</a>
        
        <button
          className={`nav__toggle ${menuOpen ? 'nav__toggle--open' : ''}`}
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </button>

        <ul className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`} id="navLinks">
          <li><a href="#about" className="nav__link" onClick={() => setMenuOpen(false)}>À propos</a></li>
          <li><a href="#stack" className="nav__link" onClick={() => setMenuOpen(false)}>Stack</a></li>
          <li><a href="#realisations" className="nav__link" onClick={() => setMenuOpen(false)}>Réalisations</a></li>
          <li><a href="#partenariats" className="nav__link" onClick={() => setMenuOpen(false)}>Partenariats</a></li>
          <li><a href="#github" className="nav__link" onClick={() => setMenuOpen(false)}>Projets</a></li>
          <li><a href="#contact" className="nav__link nav__link--cta" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
