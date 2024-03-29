import React, { useEffect } from "react";
import styled from "styled-components";
import PText from "../components/shared/PText";
import CredlyButton from "../components/CredlyButton";
import SectionTitle from "../components/shared/SectionTitle";

// import Emoji from "../assets/emoji_avatar.mp4";
import Avatar from "../assets/images/avatar.svg";


import { FaBitcoin } from "react-icons/fa";


import { motion } from "framer-motion/dist/framer-motion";

// import AboutInfoItem from "../components/AboutInfoItem";
// import ExperienceInfoItem from "../components/ExperienceInfoItem";
// import CertificationInfoItem from "../components/CertificationInfoItem";
// import WorkExperienceSection from "../sections/WorkExperienceSection";

import { useTranslation } from "react-i18next";

import Aos from "aos";
import "aos/dist/aos.css";

export default function About() {
  const { t } = useTranslation();

  useEffect(() => {
    // Aos.init({ disable: "mobile", duration: 1000 });
    Aos.init({ offset: 400, duration: 1000 });
    // Aos.init({ delay: 0, duration: 1000 });
  }, []);

  return (
    <>
      <AboutPageStyles>
        <motion.div
          initial={{ y: "100%", opacity: 1 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.77, ease: "easeOut" }}
          exit={{ opacity: 1 }}
        >
          <div className="container">
            <SectionTitle
              subheading={t("About.SectionDescription")}
              heading={t("About.SectionTitle")}
            />
            <br />
            <div className="top-section">
              <div className="left">
                <motion.div
                  initial={{ y: "100%", opacity: 1 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.79, ease: "easeOut" }}
                  exit={{ opacity: 1 }}
                >
                  <h4 className="about__heading">{t("About.Title")}</h4>
                  <div className="about__info">
                    <PText>
                      {t("About.Paragraph1")}
                      <FaBitcoin></FaBitcoin>
                      {t("About.Paragraph1a")}
                      <br />
                      <br />
                      {t("About.Paragraph2")}
                      <br />
                      <br />
                      {t("About.Paragraph2bis")}
                      <br />
                    </PText>
                    <br />
                    <br />
                    <PText>
                      <p className="paragraph">{t("About.ProductSkills")}</p>
                      <div className="about-info">
                        <div className="info-title">
                          <p>• Product Strategy</p>
                          <p>• User Interface Design</p>
                          <p>• 0 to 1 Product Launch</p>
                        </div>
                        <div className="info">
                          <p>• Data Analysis</p>
                          <p>• A/B Testing</p>
                          <p>• Cross-functional Team Leadership</p>
                        </div>
                      </div>
                      <p className="paragraph">{t("About.TechSkills")}</p>
                      <div className="about-info">
                        <div className="info-title">
                          <p>• React</p>
                          <p>• REST/GraphQL</p>
                          <p>• SQL</p>
                        </div>
                        <div className="info">
                          <p>• Docker/Kubernetes</p>
                          <p>• PowerBI</p>
                          <p>• Git</p>
                        </div>
                      </div>
                    </PText>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ y: "100%", opacity: 1 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.83, ease: "easeOut" }}
                  exit={{ opacity: 1 }}
                >
                  <div className="button_row">
                    <a
                      href="https://drive.google.com/file/d/12Qh0Q2oEcfTmzaI3tDXXfJzmjzvoGc-0/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="confsquare-btn">
                        {t("About.Button")}
                      </button>
                    </a>
                    <CredlyButton btnText="Download CV" btnLink="#" id="btn2" />
                  </div>
                </motion.div>
              </div>
              <div className="right">
                <img src={Avatar} alt="avatar" />
              </div>
            </div>
          </div>
        </motion.div>
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
  .video {
    width: 100%;
    height: 100%;
    border-radius: 300px;
    display: block;
    object-fit: contain;
    object-position: 50% 50%;
  }
  .about__subheading {
    font-size: 1.8rem;
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
  .paragraph {
    padding: 1rem 0;
    @media screen and (max-width: 670px) {
      font-size: 1.8rem;
    }
  }
  .about-info {
    display: flex;
    padding-bottom: 1.4rem;
    font-size: 1.8rem;

    .info-title {
      padding-right: 3rem;
      p {
        font-weight: 400;
      }
    }
    .info-title,
    .info {
      p {
        font-weight: 400;
        @media screen and (max-width: 670px) {
          font-size: 1.8rem;
        }
      }
    }
  }
  .confsquare-btn {
    font-size: 1.6rem;
    font-weight: 400;
    font-family: var(--main-font);
    background-color: var(--primary-color);
    border: 1px solid var(--brand-color);
    border-radius: 2.5px;
    display: inline-block;
    color: var(--brand-color);
    transition: all 0.3s ease-in-out;
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.4), 0px 0px 50px rgba(0, 0, 0, 0);
    transform-style: preserve-3d;
    padding: 1.2rem 3rem 1.2rem 3rem;
    overflow: hidden;
    &:hover {
      /* color: var(--black); */
      background-color: var(--bg-button-color);
      /* font-weight: 500; */
      transform: scale(1.1);
      transform: translate(7px, -7px);
      transform-style: preserve-3d;
      transition: all 0.2s ease-in-out;
      box-shadow: 5px 10px var(--shadow-color);
    }
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
  svg {
    max-width: 17px;
    fill: #f79413;
    margin-right: 4px;
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
    .right {
      display: none;
    }
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
    .right {
      display: none;
    }
  }
`;
