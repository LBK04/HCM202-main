import React, { useState } from 'react';

const ImagePlaceholder = ({ src, alt = 'Hình minh họa', className = '' }) => {
  const [hasError, setHasError] = useState(false);
  const hasImage = src && !hasError;

  if (!hasImage) {
    return (
      <div className={`img-placeholder ${className}`}>
        <div className="img-placeholder__inner">
          <div className="img-placeholder__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </div>
          <div className="img-placeholder__text">
            <span className="img-placeholder__title">Thêm ảnh minh họa</span>
            <span className="img-placeholder__sub">Ảnh minh họa chủ đề</span>
          </div>
          <div className="img-placeholder__glow" />
        </div>
      </div>
    );
  }

  return (
    <div className={`img-placeholder img-placeholder--loaded ${className}`}>
      <img
        src={src}
        alt={alt}
        onError={() => setHasError(true)}
        className="img-placeholder__img"
      />
    </div>
  );
};

export default ImagePlaceholder;
