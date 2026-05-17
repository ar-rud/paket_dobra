import React, { forwardRef } from "react";
import "./MoreButton.css";

const MoreButton = forwardRef(({
  children,
  variant = "default",
  className = "",
  type = "button",
  leftIcon,
  rightIcon,
  ...props
}, ref) => {
  const buttonClassName = `MoreButton-button MoreButton-button--${variant} ${className}`.trim();

  return (
    <button 
      ref={ref}
      className={buttonClassName} 
      type={type} 
      {...props} 
    >
      {leftIcon && <span className="MoreButton-icon">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="MoreButton-icon">{rightIcon}</span>}
    </button>
  );
});

MoreButton.displayName = "MoreButton";

export default MoreButton;