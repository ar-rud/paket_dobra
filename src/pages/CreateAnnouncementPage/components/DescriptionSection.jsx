import SectionCard from "./SectionCard.jsx";
import MoreButton from "../../../components/MoreButton/MoreButton.jsx";
import vectorIcon from "../../../assets/images/Vector.svg";
import "./DescriptionSection.css";

export default function DescriptionSection({ description, onDescriptionChange }) {
  return (
    <SectionCard
      title="Додайте опис"
      className="description-section"
      titleClassName="description-section__title"
      bodyClassName="description-section__body"
    >
      <div className="description-section__stack">
        <textarea
          className="description-section__textarea"
          value={description}
          onChange={(event) => onDescriptionChange(event.target.value)}
          placeholder="Як найвлучніше опишіть свій товар"
        />

        <MoreButton className="description-section__improve">
          Покращити
          <img src={vectorIcon} alt="" aria-hidden="true" className="description-section__improve-icon" />
        </MoreButton>
      </div>
    </SectionCard>
  );
}
