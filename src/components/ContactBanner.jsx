import React from "react";
import styled from "styled-components";
import Button from "./Button";
import PText from "./shared/PText";

import { useTranslation } from "react-i18next";

import Typical from "../components/shared/Typical";

export default function ContactBanner() {
  const { t } = useTranslation();

  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>
            <Typical
              as="contactBanner__heading"
              main_title={t("Contact.Headline0")}
              title_1={t("Contact.Headline1")}
              title_2={t("Contact.Headline2")}
              title_3={t("Contact.Headline3")}
            />
          </PText>
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
    /* background-color: var(--secondary-color); */
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
