"use client";

import { useEffect, useRef } from 'react';

const Stars = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const stars = 200;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < stars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      fragment.appendChild(star);
    }

    container.appendChild(fragment);

    return () => {
      // Cleanup when component unmounts
      container.innerHTML = '';
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0" />;
};

export default Stars;
