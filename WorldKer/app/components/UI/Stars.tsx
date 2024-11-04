"use client";

import { useEffect, useRef } from "react";

const Stars = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const stars = 200;
    const fragment = document.createDocumentFragment();

    const createStar = () => {
      const star = document.createElement("div");
      star.classList.add("star");

      star.style.top = `${Math.min(Math.random() * 100, 99)}%`;
      star.style.left = `${Math.min(Math.random() * 100, 99)}%`;

      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      return star;
    };

    for (let i = 0; i < stars; i++) {
      fragment.appendChild(createStar());
    }

    container.appendChild(fragment);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default Stars;
