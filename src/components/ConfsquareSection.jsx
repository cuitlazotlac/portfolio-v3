import React from "react";
import styled from "styled-components";
import Button from "./Button";
import PText from "./shared/PText";
import SectionTitle from "./SectionTitle";

import ConfsquareLogo from "../assets/images/confsquare/confsquare.svg";

import { useTranslation } from "react-i18next";

export default function ConfsquareSection() {
  const { t } = useTranslation();

  return (
    <ConfsquareSectionStyles>
      <div className="container">
        <div className="confsquareSection__left">
          <SectionTitle
            subheading={t("Confsquare.SectionDescription")}
            heading={t("Confsquare.SectionTitle")}
          />
          <PText>{t("Confsquare.Description_Part1")}</PText>
          <PText>{t("Confsquare.Description_Part2")}</PText>
          <div className="confsquareSection__buttons">
            <div className="confsquareSection__buttons">
              <a
                href="https://confsquare.com/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="confsquare-btn">Confsquare Website</button>
              </a>
            </div>
            <Button
              btnText={t("Confsquare.Works")}
              btnLink="/projects"
              outline
            ></Button>
          </div>
        </div>
        <div className="confsquareSection__right">
          <img className="confsquareImg" src={ConfsquareLogo} alt="Img" />
        </div>
      </div>
    </ConfsquareSectionStyles>
  );
}

const ConfsquareSectionStyles = styled.div`
  padding-top: 2rem;
  padding-bottom: 10rem;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .confsquareSection__left {
    flex: 4;
  }
  .confsquareSection__right {
    flex: 3;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .confsquareSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  .confsquare-btn {
    font-family: var(--main-font);
    font-size: 1.7rem;
    font-weight: 400;
    background-color: var(--brand-color);
    border: 1px solid var(--btn-border-color);
    border-radius: 1px;
    display: inline-block;
    color: var(--btn-color);
    transition: all 0.3s ease-in-out;
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.4), 0px 0px 50px rgba(0, 0, 0, 0);
    transform-style: preserve-3d;
    padding: 1rem;
    overflow: hidden;
    &:hover {
      color: var(--font-color);
      background-color: var(--primary-color);
      transform: scale(1.1);
      transform: translate(7px, -7px);
      transform-style: preserve-3d;
      transition: all 0.2s ease-in-out;
      box-shadow: 5px 10px var(--shadow-color);
    }
  }
  .confsquareImg {
    width: 80%;
  }
  @media only screen and (max-width: 950px) {
    .confsquareSection__left {
      flex: 4;
    }
    .confsquareSection__right {
      flex: 3;
    }
    .confsquareImg {
      width: 50%;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .confsquareSection__left,
    .confsquareSection__right {
      width: 100%;
    }
    .confsquareSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .confsquareImg {
      width: 50%;
    }
    .confsquareSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;
