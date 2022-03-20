import React from "react";
import styled from "styled-components";
import Button from "./Button";
import PText from "./PText";
import SectionTitle from "./SectionTitle";

import ConfsquareLogo from "../assets/images/avatar.svg";

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
            <Button btnText={t("Confsquare.ReadMore")} btnLink="/projects" />
            <Button
              btnText={t("Confsquare.Works")}
              btnLink="/projects"
              outline
            />
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
  .confsquareSection__left,
  .confsquareSection__right {
    flex: 1;
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
  @media only screen and (max-width: 950px) {
    .confsquareSection__left {
      flex: 4;
    }
    .confsquareSection__right {
      flex: 3;
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
