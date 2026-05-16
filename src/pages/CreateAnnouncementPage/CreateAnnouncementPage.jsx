import { useState } from "react";
import Header from "../../components/Header/Header.jsx";
import BasicDataSection from "./components/BasicDataSection.jsx";
import PhotoSection from "./components/PhotoSection.jsx";
import PriceSection from "./components/PriceSection.jsx";
import DescriptionSection from "./components/DescriptionSection.jsx";
import DonationHelpSection from "./components/DonationHelpSection.jsx";
import MoreButton from "../../components/MoreButton/MoreButton.jsx";
import "./CreateAnnouncementPage.css";

export default function CreateAnnouncementPage() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [donationPercent, setDonationPercent] = useState(25);
  const [condition, setCondition] = useState("Вживане");
  const [description, setDescription] = useState("");
  const [donateToFund, setDonateToFund] = useState(false);

  return (
    // <main className="create-announcement-page">
    //   <Header topInfoText="" />

    <div className="create-announcement-page__container">
      <h1 className="create-announcement-page__title">Оформлення оголошення</h1>

      <div className="create-announcement-page__sections">
        <BasicDataSection
          name={name}
          category={category}
          onNameChange={setName}
          onCategoryChange={setCategory}
        />

        <PhotoSection />

        <PriceSection
          price={price}
          donationPercent={donationPercent}
          condition={condition}
          onPriceChange={setPrice}
          onDonationPercentChange={setDonationPercent}
          onConditionChange={setCondition}
        />

        <DescriptionSection
          description={description}
          onDescriptionChange={setDescription}
        />

        <DonationHelpSection
          donateToFund={donateToFund}
          onDonateToFundChange={setDonateToFund}
        />
      </div>

      <div className="create-announcement-page__actions">
        <div className="create-announcement-page__actions-left">
          <MoreButton className="create-announcement-page__action create-announcement-page__action--draft">
            Зберегти чернетку
          </MoreButton>
          <MoreButton className="create-announcement-page__action create-announcement-page__action--cancel">
            Скасувати
          </MoreButton>
        </div>

        <MoreButton
          variant="primary"
          className="create-announcement-page__action create-announcement-page__action--publish create-announcement-page__action--primary"
        >
          Опублікувати
        </MoreButton>
      </div>
    </div>
    // </main>
  );
}
