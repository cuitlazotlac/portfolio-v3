import React, { useState } from "react";
import styled from "styled-components";
import FooterCol from "./FooterCol";
import PText from "../PText";
import LanguageSelect from "../LanguageSelect";

import logo from "../../assets/images/avatar.png";

import i18n from "i18next";
import { useTranslation } from "react-i18next";
import ThemeToggle from "../ThemeToggle";

export default function Footer() {
  const { t } = useTranslation();
  const onChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">{t("Footer.Title")}</h1>
          <PText>{t("Footer.Description")}</PText>
          <LanguageSelect />
          <ThemeToggle />
        </div>
        <div className="footer__col2">
          <FooterCol
            heading={t("Footer.Section")}
            links={[
              {
                title: "Home",
                path: "/",
                type: "Link",
              },
              {
                type: "Link",
                title: "About",
                path: "/about",
              },
              {
                type: "Link",
                title: "Projects",
                path: "/projects",
              },
              {
                type: "Link",
                title: "Contact",
                path: "/contact",
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading={t("Footer.Social Links")}
            links={[
              {
                title: "LinkedIn",
                path: "http://facebook.com",
              },
              {
                title: "Github",
                path: "http://twitter.com",
              },
              {
                title: "Behance",
                path: "http://instagram.com",
              },
              {
                title: "Codepen",
                path: "http://instagram.com",
              },
            ]}
          />
        </div>
      </div>
      <br />
    </FooterStyle>
  );
}

const FooterStyle = styled.div`
  background-color: var(--secondary-color);
  // background-image: url("https://drive.google.com/file/d/1rerm1A_hlBCtEcayZP7vnHkSfjWYHaLS/view?usp=sharing");
  background-image: url(${"logo"});
  background-position: center;
  background-size: cover;
  padding-top: 5rem;
  font-size: 1.5rem;
  .lang-list {
    margin-top: 2rem;
    background-color: ${(props) =>
      props.outline ? "transperant" : "var(--background-color)"};
    padding: 0.7em 2em;
    border: 2px solid var(--font-color);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? "var(--background-color)" : "black")};
    @media only screen and (max-width: 768px) {
      .lang-list {
        font-size: 1.5rem;
      }
    }
  }
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
  }
`;
