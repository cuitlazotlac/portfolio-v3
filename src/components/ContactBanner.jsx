import React from "react";
import styled from "styled-components";
import Button from "./Button";
import PText from "./shared/PText";

import { useTranslation } from "react-i18next";

export default function ContactBanner() {
  const { t } = useTranslation();

  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>{t("Contact.SectionDescription")}</PText>
          <h3 className="contactBanner__heading">
            {t("Contact.SectionTitle")}
          </h3>
          <Button btnText={t("Contact.Button")} btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}

const ContactBannerStyles = styled.div`
  padding: 5rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;
