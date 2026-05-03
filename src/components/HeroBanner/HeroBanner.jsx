import React from "react";
import PropTypes from "prop-types";
import "./HeroBanner.css";

/**
 * HeroBanner
 * Props:
 * - variant: 'light' | 'solid' (controls background color)
 * - leftContent: React node for left column
 * - rightContent: React node for right column
 */
export default function HeroBanner({ variant = "light", leftContent, rightContent }) {
  return (
    <header className="hero-banner" data-variant={variant}>
      {/* background pattern - stepped rectangles */}
      <div className="hero-banner__pattern" aria-hidden>
        <svg className="hero-banner__svg" preserveAspectRatio="none" viewBox="0 0 1200 200" xmlns="http://www.w3.org/2000/svg">
          <rect x="60" y="40" width="160" height="100" fill="var(--hero-pattern)" />
          <rect x="480" y="60" width="190" height="80" fill="var(--hero-pattern)" />
          <rect x="990" y="40" width="140" height="100" fill="var(--hero-pattern)" />
        </svg>
      </div>

      <div className="hero-banner__inner">
        <div className="hero-banner__row">
          <div className="hero-banner__col hero-banner__col--left">{leftContent}</div>
          <div className="hero-banner__col hero-banner__col--right">{rightContent}</div>
        </div>
      </div>
    </header>
  );
}

HeroBanner.propTypes = {
  variant: PropTypes.oneOf(["light", "solid"]),
  leftContent: PropTypes.node,
  rightContent: PropTypes.node,
};
