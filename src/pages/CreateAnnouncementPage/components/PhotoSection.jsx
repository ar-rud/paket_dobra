import SectionCard from "./SectionCard.jsx";
import "./PhotoSection.css";

export default function PhotoSection() {
  return (
    <SectionCard
      title="Додайте фото"
      className="photo-section"
      titleClassName="photo-section__title"
      bodyClassName="photo-section__body"
    >
      <p className="photo-section__hint">Зверніть увагу, що перше фото слугуватиме окладинкою</p>
      <div className="photo-section__grid">
        {[1, 2, 3, 4].map((slot) => (
          <button key={slot} type="button" className="photo-section__slot" aria-label={`Додати фото ${slot}`}>
            <span className="photo-section__plus">+</span>
          </button>
        ))}
      </div>
    </SectionCard>
  );
}
