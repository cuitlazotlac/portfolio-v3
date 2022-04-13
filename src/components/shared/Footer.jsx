import React from "react";
import styled from "styled-components";
import FooterCol from "./FooterCol";
import LanguageSelect from "../LanguageSelect";

import { useTranslation } from "react-i18next";
import ThemeToggle from "../ThemeToggle";

export default function Footer() {
  const { t } = useTranslation();

  return (
    // TODO: tes todo
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">{t("Footer.Title")}</h1>
          <p>{t("Footer.Description")}</p>
          <br />
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
                title: "Github",
                path: "https://github.com/cuitlazotlac",
              },
              {
                title: "LinkedIn",
                path: "https://www.linkedin.com/in/hayssem-elsayed/",
              },
              {
                title: "Behance",
                path: "https://www.behance.net/cuitlazotlac",
              },
              {
                title: "Codepen",
                path: "https://codepen.io/cuitlazotlac",
              },
            ]}
          />
        </div>
      </div>
    </FooterStyle>
  );
}

const FooterStyle = styled.div`
  background-color: var(--secondary-color);
  // background-image: url("https://drive.google.com/file/d/1rerm1A_hlBCtEcayZP7vnHkSfjWYHaLS/view?usp=sharing");
  // background-image: url(${"logo"});
  background-position: center;
  background-size: cover;
  padding-top: 5rem;
  padding-bottom: 5rem;
  font-size: 1.5rem;
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
