import "./MoreButton.css";

export default function MoreButton({
  children,
  onClick,
  disabled = false,
  variant = "default",
  className = "",
  type = "button",
}) {
  const buttonClassName = `MoreButton-button MoreButton-button--${variant} ${className}`.trim();

  return (
    <button className={buttonClassName} onClick={onClick} disabled={disabled} type={type}>
      {children}
    </button>
  );
}
