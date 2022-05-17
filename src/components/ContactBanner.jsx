import React from "react";
import styled from "styled-components";
import Button from "./Button";
// import PText from "./shared/PText";

import { useTranslation } from "react-i18next";

// import Typical from "../components/shared/Typical";

export default function ContactBanner() {
  const { t } = useTranslation();

  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <p className="contactBanner__subheading">{t("Contact.Headline1")}</p>
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

  .contactBanner__subheading {
    font-family: var(--stacks-font);
    font-weight: 200;
    font-size: 1.8rem;
    /* color: var(--brand-color); */
  }
  .contactBanner__wrapper {
    background-color: var(--secondary-color);

    border-radius: 1px;
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
