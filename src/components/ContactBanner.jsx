import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import ContactButton from "./ContactButton";

export default function ContactBanner() {
  const { t } = useTranslation();

  return (
    <ContactBannerStyles>
      <div className="container">
        <a href="/contact">
          <div className="contactBanner__wrapper">
            <div className="layer"></div>
            <p className="contactBanner__subheading">
              {t("Contact.Headline1")}
            </p>
            <h3 className="contactBanner__heading">
              {t("Contact.SectionTitle")}
            </h3>
            <p className="contactBanner__subheading">
              {t("Contact.SectionDescription")}{" "}
            </p>
            {/* <ContactButton
            className="button-section"
            btnText={t("Contact.Button")}
            btnLink="/contact"
          /> */}
          </div>
        </a>
      </div>
    </ContactBannerStyles>
  );
}

const ContactBannerStyles = styled.div`
  padding: 5rem 0;

  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
    /* position: relative; */
    /* color: #256456; */
  }

  .contactBanner__subheading {
    /* position: relative; */
    font-family: var(--stacks-font);
    font-weight: 400;
    font-size: 1.8rem;
    /* color: #256456; */
  }

  .contactBanner__wrapper {
    border-radius: 2px;
    padding: 5rem 0rem;
    text-align: center;
    position: relative;

    &::before {
      content: "";
      border-radius: 2px;
      /* background-image: url("https://feature.undp.org/beyond-bitcoin/assets/ahbYpiFf0Q/block4.gif"); */
      border: 1px solid var(--brand-color);
      background-size: cover;
      background-position: center;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      opacity: 0.75;
    }

    &:hover {
      /* color: var(--black); */
      /* background-color: var(--brand-color); */
      transform: scale(1.1);
      transform: translate(7px, -7px);
      transform-style: preserve-3d;
      transition: all 0.2s ease-in-out;
      box-shadow: 5px 10px var(--shadow-color);
    }
  }
  /* .layer {
    border-radius: 8px;
    background-color: rgba(1, 227, 180, 0.37);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  } */

  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;
