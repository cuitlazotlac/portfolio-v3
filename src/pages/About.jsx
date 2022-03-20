import React from "react";
import styled from "styled-components";
import PText from "../components/PText";
import Button from "../components/Button";
import CredlyButton from "../components/CredlyButton";

import Avatar from "../assets/images/avatar.svg";

import AboutInfoItem from "../components/AboutInfoItem";

import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <AboutPageStyles>
        <div className="container">
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
                  <br />
                  {t("About.Paragraph3")}
                </PText>
              </div>
              <div className="button_row">
                <Button btnText="Download CV" btnLink="#" id="btn1" />
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
                items={["React", "CSS", "JavaScript"]}
              />
              <AboutInfoItem
                title="Data"
                items={["React", "CSS", "JavaScript"]}
              />
              <AboutInfoItem
                title="Blockchain"
                items={["Node", "Express", "PHP"]}
              />
              <AboutInfoItem
                title="Design"
                items={["Figma", "After Effects", "Figma"]}
              />
            </div>
            {/* // EXPERIENCE SECTION */}
            <div className="about__info__item">
              <h1 className="about__info__heading">{t("About.Experience")}</h1>

              <AboutInfoItem
                title="2010-2012"
                items={["junior developer at web Cifar"]}
              />
              <AboutInfoItem
                title="2012-2016"
                items={["Front end developer at web Cifar "]}
              />
              <AboutInfoItem
                title="2016-"
                items={["Freelance web Developer"]}
              />
            </div>
            {/* // CERTIFICATION SECTION */}
            <div className="about__info__item">
              <h1 className="about__info__heading">
                {t("About.Certification")}
              </h1>

              <AboutInfoItem
                title="2010-2012"
                items={["junior developer at web Cifar"]}
              />
              <AboutInfoItem
                title="2012-2016"
                items={["Front end developer at web Cifar "]}
              />
              <AboutInfoItem
                title="2016-"
                items={["Freelance web Developer"]}
              />
            </div>
            {/* // EDUCATION SECTION */}
            <div className="about__info__item">
              <h1 className="about__info__heading">{t("About.Education")}</h1>

              <AboutInfoItem
                title="School"
                items={["Nasirabad Govt. High School, Chattogram"]}
              />
              <AboutInfoItem
                title="Collage"
                items={["BAF Shaheen College Chattogram"]}
              />
              <AboutInfoItem
                title="Varsity"
                items={["University Of Chitiagong"]}
              />
            </div>
          </div>
        </div>
      </AboutPageStyles>
    </>
  );
}

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
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
    gap: 1rem;
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
      border: 2px solid var(--font-color);
    }
  }
  .about__info__items {
    margin-top: 15rem;
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
