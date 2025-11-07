import { useEffect, useState } from 'react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.05 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);

    return () => {
      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-[#0A0F1F]/60' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#003C7E] to-[#00AEEF] shadow-[0_0_20px_rgba(0,174,239,0.6)]" />
          <span className="text-[#E0E6EE] font-semibold tracking-wide">Nova Digital Solution</span>
        </div>
        <ul className="hidden md:flex items-center gap-6">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => scrollTo(s.id)}
                className={`relative text-sm tracking-wide transition-colors ${
                  active === s.id ? 'text-[#00AEEF]' : 'text-[#E0E6EE]/80 hover:text-[#E0E6EE]'
                }`}
              >
                {s.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] transition-all ${
                    active === s.id ? 'w-full bg-[#00AEEF] shadow-[0_0_12px_#00AEEF]' : 'w-0 bg-transparent'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
