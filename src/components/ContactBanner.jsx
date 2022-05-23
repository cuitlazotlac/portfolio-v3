import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { useTranslation } from "react-i18next";

export default function ContactBanner() {
  const { t } = useTranslation();

  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <div className="layer"></div>
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
    position: relative;
    font-family: var(--stacks-font);
    font-weight: 200;
    font-size: 1.8rem;
  }
  .contactBanner__wrapper {
    border-radius: 1px;
    padding: 5rem 0rem;
    text-align: center;
    position: relative;

    &::before {
      content: "";
      background-image: url("https://media.giphy.com/media/2XrLfX86d7Nok/giphy.gif");
      background-size: cover;
      background-position: center;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      opacity: 0.75;
    }
  }
  .layer {
    background-color: rgba(1, 227, 180, 0.37);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
    position: relative;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;
