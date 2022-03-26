import React from "react";
import styled from "styled-components";
import PText from "../components/PText";
import Button from "../components/Button";
import CredlyButton from "../components/CredlyButton";

import Avatar from "../assets/images/avatar.svg";
import AboutInfoItem from "../components/AboutInfoItem";
import SectionTitle from "../components/SectionTitle";
import ExperienceInfoItem from "../components/ExperienceInfoItem";
import CertificationInfoItem from "../components/CertificationInfoItem";

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
            <h1 className="about__info__heading">{t("About.Skill")}</h1>
            <div className="about__info__item">
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
            <h1 className="about__info__heading">{t("About.Experience")}</h1>
            <div className="about__info__item">
              <ExperienceInfoItem
                title={t("Experience4.Title")}
                company={t("Experience4.Company")}
                period={t("Experience4.Period")}
                desc1={t("Experience4.Desc1")}
                desc2={t("Experience4.Desc2")}
                desc3={t("Experience4.Desc3")}
                desc4={t("Experience4.Desc4")}
                desc5={t("Experience4.Desc5")}
                stacks={t("Experience4.Stacks")}
              />
              <ExperienceInfoItem
                title={t("Experience3.Title")}
                company={t("Experience3.Company")}
                period={t("Experience3.Period")}
                desc1={t("Experience3.Desc1")}
                desc2={t("Experience3.Desc2")}
                desc3={t("Experience3.Desc3")}
                desc4={t("Experience3.Desc4")}
                desc5={t("Experience3.Desc5")}
                stacks={t("Experience3.Stacks")}
              />{" "}
              <ExperienceInfoItem
                title={t("Experience2.Title")}
                company={t("Experience2.Company")}
                period={t("Experience2.Period")}
                desc1={t("Experience2.Desc1")}
                desc2={t("Experience2.Desc2")}
                desc3={t("Experience2.Desc3")}
                desc4={t("Experience2.Desc4")}
                desc5={t("Experience2.Desc5")}
                stacks={t("Experience2.Stacks")}
              />{" "}
              <ExperienceInfoItem
                title={t("Experience1.Title")}
                company={t("Experience1.Company")}
                period={t("Experience1.Period")}
                desc1={t("Experience1.Desc1")}
                desc2={t("Experience1.Desc2")}
                desc3={t("Experience1.Desc3")}
                desc4={t("Experience1.Desc4")}
                desc5={t("Experience1.Desc5")}
                stacks={t("Experience1.Stacks")}
              />
              <ExperienceInfoItem
                title={t("Experience0.Title")}
                company={t("Experience0.Company")}
                period={t("Experience0.Period")}
                desc1={t("Experience0.Desc1")}
                desc2={t("Experience0.Desc2")}
                desc3={t("Experience0.Desc3")}
                desc4={t("Experience0.Desc4")}
                desc5={t("Experience0.Desc5")}
                stacks={t("Experience0.Stacks")}
              />
            </div>
            {/* // EDUCATION SECTION */}
            <h1 className="about__info__heading">{t("About.Education")}</h1>
            <div className="about__info__item">
              <CertificationInfoItem
                title={t("Education1.Title")}
                company={t("Education1.Company")}
              />
            </div>
            {/* // CERTIFICATION SECTION */}
            <h1 className="about__info__heading">{t("About.Certification")}</h1>
            <div className="certification__info__items">
              <CertificationInfoItem
                title={t("Certification.Title10")}
                company={t("Certification.Company10")}
              />{" "}
              <CertificationInfoItem
                title={t("Certification.Title9")}
                company={t("Certification.Company9")}
              />{" "}
              <CertificationInfoItem
                title={t("Certification.Title8")}
                company={t("Certification.Company8")}
              />{" "}
              <CertificationInfoItem
                title={t("Certification.Title7")}
                company={t("Certification.Company7")}
              />{" "}
              <CertificationInfoItem
                title={t("Certification.Title6")}
                company={t("Certification.Company6")}
              />{" "}
              <CertificationInfoItem
                title={t("Certification.Title5")}
                company={t("Certification.Company5")}
              />{" "}
              <CertificationInfoItem
                title={t("Certification.Title4")}
                company={t("Certification.Company4")}
              />{" "}
              <CertificationInfoItem
                title={t("Certification.Title3")}
                company={t("Certification.Company3")}
              />{" "}
              <CertificationInfoItem
                title={t("Certification.Title2")}
                company={t("Certification.Company2")}
              />{" "}
              <CertificationInfoItem
                title={t("Certification.Title1")}
                company={t("Certification.Company1")}
              />{" "}
              <CertificationInfoItem
                title={t("Certification.Title0")}
                company={t("Certification.Company0")}
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
    }
  }
  .about__info__items {
    margin-top: 1rem;
  }
  @media only screen and (min-width: 892px) {
    .certification__info__items {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1rem;
    }
  }
  .about__info__heading {
    margin-top: 4rem;
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
