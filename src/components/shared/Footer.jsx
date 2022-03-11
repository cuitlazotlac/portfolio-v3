import React, { useState } from "react";
import styled from "styled-components";
import FooterCol from "./FooterCol";
import PText from "../PText";
import LanguageSelect from "../LanguageSelect";

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
          <h1 className="footer__col1__title">{t("Home.Title")}</h1>
          <PText>
            I'm a product manager working on the blockchain infrastructure
          </PText>
          <LanguageSelect />
          <ThemeToggle />
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
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
            heading="Contact Info"
            links={[
              {
                title: "+88012312",
                path: "tel:+88012312",
              },
              {
                title: "webcifar@gmail.com",
                path: "mailto:webcifar@gmail.com",
              },
              {
                title: "GEC Circle, Chittagong, Bangladesh",
                path: "http://google.com/maps",
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: "Facebook",
                path: "http://facebook.com",
              },
              {
                title: "Twitter",
                path: "http://twitter.com",
              },
              {
                title: "Instagram",
                path: "http://instagram.com",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2021 - Hayssem Elsayed | Designed By{" "}
            <a target="_blank" rel="noreferrer" href="http://webcifar.com">
              web cifar
            </a>{" "}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}

const FooterStyle = styled.div`
  // background-color: var(--deep-dark);
  background-color: var(--primary-color);
  padding-top: 10rem;
  .lang-list {
    margin-top: 2rem;
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? "transperant" : "var(--gray-1)"};
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? "var(--gary-1)" : "black")};
    @media only screen and (max-width: 768px) {
      .lang-list {
        font-size: 1.8rem;
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
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
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
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;
