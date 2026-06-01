import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Khái niệm', id: 'global-stats' },
    { label: 'Sự cần thiết', id: 'silence' },
    { label: 'Lực lượng', id: 'vietnam' },
    { label: 'Nguyên tắc', id: 'consequences' },
    { label: 'Giá trị', id: 'academic' },
    { label: 'Vận dụng', id: 'policy' },
    { label: 'Kết luận', id: 'law' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled
          ? 'rgba(15, 23, 42, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(255,255,255,0.08)'
          : 'none',
      }}
    >
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '14px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        {/* BRAND */}
        <div style={{
          fontWeight: 800,
          fontSize: '1rem',
          color: scrolled ? '#e2e8f0' : '#ffffff',
          letterSpacing: '0.5px',
        }}>
          Tư tưởng Hồ Chí Minh
        </div>

        {/* LINKS */}
        <div style={{
          display: 'flex',
          gap: 22,
          alignItems: 'center',
        }}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: scrolled ? 'rgba(226,232,240,0.85)' : 'rgba(255,255,255,0.85)',
                transition: '0.2s',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#b91c1c';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = scrolled
                  ? 'rgba(226,232,240,0.85)'
                  : 'rgba(255,255,255,0.85)';
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;