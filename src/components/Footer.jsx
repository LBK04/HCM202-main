import React from 'react';

const Footer = () => {
  return (
    <footer
      className="footer-section"
      style={{
        background: '#0f172a',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        color: '#e2e8f0',
      }}
    >
      <div className="footer-section__inner" style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: '40px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 16,
      }}>

        {/* Brand */}
        <div className="footer-section__brand" style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}>
          <div className="footer-section__brand-icon" style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            background: 'rgba(255,255,255,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            color: '#fff',
          }}>
            HCM
          </div>

          <div className="footer-section__brand-text">
            <div style={{ fontWeight: 700, fontSize: '1rem' }}>
              Tư tưởng Hồ Chí Minh
            </div>
            <div style={{ fontSize: '0.85rem', color: 'rgba(226,232,240,0.7)' }}>
              Đại đoàn kết toàn dân tộc & đoàn kết quốc tế
            </div>
          </div>
        </div>

        {/* Tag */}
        <div
          className="footer-section__tag"
          style={{
            fontSize: '0.85rem',
            color: 'rgba(226,232,240,0.6)',
          }}
        >
          Hòa bình • Độc lập • Hợp tác • Phát triển
        </div>
      </div>
    </footer>
  );
};

export default Footer;