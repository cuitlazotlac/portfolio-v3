import React from "react";
import styled from "styled-components";
import PText from "../components/PText";
import Button from "../components/Button";
import CredlyButton from "../components/CredlyButton";

import Avatar from "../assets/images/avatar.svg";
import AboutInfoItem from "../components/AboutInfoItem";
import SectionTitle from "../components/SectionTitle";

import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <SectionTitle
            subheading={t("About.SectionDescription")}
            heading={t("About.SectionTitle")}
          />
          <br />
          <div className="top-section">
            <div className="left">
              <h4 className="about__heading">{t("About.Title")}</h4>
              <div className="about__info">
                <PText>
                  {t("About.Paragraph1")}
                  <br />
                  <br />
                  {t("About.Paragraph2")}
                  <br />
                </PText>
              </div>
              <div className="button_row">
                <Button btnText={t("About.Button")} btnLink="#" id="btn1" />
                <CredlyButton btnText="Download CV" btnLink="#" id="btn2" />
              </div>
            </div>
            <div className="right">
              <img src={Avatar} alt="avatar" />
            </div>
          </div>
          <div className="about__info__items">
            {/* // SKILLS SECTION */}
            <div className="about__info__item">
              <h1 className="about__info__heading">{t("About.Skill")}</h1>

              <AboutInfoItem
                title="Coding"
                items={["JavaScript", "React", "CSS"]}
              />
              <AboutInfoItem
                title="Data"
                items={[
                  "Postgres",
                  "Microsft SQL Server",
                  "PowerBI",
                  "Grafana",
                ]}
              />
              <AboutInfoItem
                title="Blockchain"
                items={["Solidity", "Truffle", "Ganache"]}
              />
              <AboutInfoItem
                title="Design"
                items={["Figma", "After Effects", "Adobe Illustrator"]}
              />
            </div>
            {/* // EXPERIENCE SECTION */}
            <div className="about__info__item">
              <h1 className="about__info__heading">{t("About.Experience")}</h1>

              <AboutInfoItem
                title="10/2018 -"
                items={[
                  "Product Manager | Société Générale Corporate & Investment Banking | Montréal - CANADA",
                ]}
              />
              <AboutInfoItem
                title="10/2017 - 10/2018"
                items={[
                  "Technical Project Manager | BNP Paribas Cardif | Paris - FRANCE",
                ]}
              />
              <AboutInfoItem
                title="07/2016 - 10/2017"
                items={["Business Analyst | Société Générale | Paris - FRANCE"]}
              />
            </div>
            {/* // CERTIFICATION SECTION */}
            <div className="about__info__item">
              <h1 className="about__info__heading">
                {t("About.Certification")}
              </h1>

              <AboutInfoItem
                title="10/2021"
                items={["IBM Blockchain Foundation Developer V2"]}
              />
              <AboutInfoItem
                title="10/2021"
                items={["IBM Blockchain Foundation Essentials V2"]}
              />
              <AboutInfoItem
                title="09/2021"
                items={["Certified Blockchain Expert"]}
              />
            </div>
            {/* // EDUCATION SECTION */}
            <div className="about__info__item">
              <h1 className="about__info__heading">{t("About.Education")}</h1>

              <AboutInfoItem
                title="Master's degree"
                items={[
                  "Master’s degree IT Project and Business Strategy | Paris 7 Diderot University - Paris, FRA",
                ]}
              />
            </div>
          </div>
        </div>
      </AboutPageStyles>
    </>
  );
}

const AboutPageStyles = styled.div`
  padding: 10rem 0;
  .top-section {
    padding: 5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 4;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--secondary-color);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .button_row {
    display: flex;
    gap: 2rem;
  }

  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      width: 100%;
      // border: 2px solid var(--font-color);
    }
  }
  .about__info__items {
    margin-top: 5rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;
