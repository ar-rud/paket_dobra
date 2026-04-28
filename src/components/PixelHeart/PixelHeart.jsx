import "./PixelHeart.css";

const heartRows = [
  [
    { start: 2, tone: "light" },
    { start: 6, tone: "light" },
  ],
  [
    { start: 1, tone: "pale" },
    { start: 2, tone: "light" },
    { start: 3, tone: "light" },
    { start: 5, tone: "mid" },
    { start: 6, tone: "light" },
    { start: 7, tone: "light" },
  ],
  [
    { start: 0, tone: "pale" },
    { start: 1, tone: "pale" },
    { start: 2, tone: "light" },
    { start: 3, tone: "mid" },
    { start: 4, tone: "light" },
    { start: 5, tone: "mid" },
    { start: 6, tone: "light" },
    { start: 7, tone: "light" },
    { start: 8, tone: "pale" },
  ],
  [
    { start: 1, tone: "pale" },
    { start: 2, tone: "light" },
    { start: 3, tone: "light" },
    { start: 4, tone: "mid" },
    { start: 5, tone: "light" },
    { start: 6, tone: "dark" },
    { start: 7, tone: "dark" },
  ],
  [
    { start: 2, tone: "light" },
    { start: 3, tone: "light" },
    { start: 4, tone: "mid" },
    { start: 5, tone: "dark" },
    { start: 6, tone: "dark" },
  ],
  [
    { start: 3, tone: "light" },
    { start: 4, tone: "dark" },
    { start: 5, tone: "dark" },
  ],
  [
    { start: 4, tone: "dark" },
  ],
];

export default function PixelHeart({ className = "" }) {
  const componentClassName = ["pixel-heart", className].filter(Boolean).join(" ");

  return (
    <div className={componentClassName} aria-hidden="true">
      {heartRows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="pixel-heart__row"
        >
          {row.map((square, squareIndex) => (
            <span
              key={`${rowIndex}-${squareIndex}`}
              className={`pixel-heart__square pixel-heart__square--${square.tone}`}
              style={{ "--square-start": square.start + 1 }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
