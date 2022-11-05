import React, { useEffect } from "react";
import styled from "styled-components";
import PText from "../components/shared/PText";
import CredlyButton from "../components/CredlyButton";
import SectionTitle from "../components/shared/SectionTitle";

import Emoji from "../assets/emoji_avatar.mp4";

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
                          <p>• Stakeholder Management</p>
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
                          <p>• HTML/CSS/Javascript</p>
                          <p>• React</p>
                          <p>• SQL</p>
                        </div>
                        <div className="info">
                          <p>• Docker/Kubernetes</p>
                          <p>• PowerBI</p>
                          <p>• Git</p>
                        </div>
                      </div>
                    </PText>
                    {/* <WorkExperienceSection /> */}
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
                      href="https://read.cv/hayssem_ve"
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
                <video muted
                  src={Emoji}
                  loop
                  autoPlay
                  className="video"
                  // name="Video Namse"
                ></video>
                {/* <img src={Avatar} alt="avatar" /> */}
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
    /* background-color: var(
      --token-444af1a9-093e-44b7-a4b0-bfe18cae8f73,
      rgb(255, 255, 255)
    ); */
    object-position: 50% 50%;
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
  .paragraph {
    padding: 1rem 0;
    @media screen and (max-width: 670px) {
      font-size: 1.6rem;
    }
  }
  .about-info {
    display: flex;
    padding-bottom: 1.4rem;

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
          font-size: 1.6rem;
        }
      }
    }
  }
  .confsquare-btn {
    font-family: var(--main-font);
    color: var(--black);
    font-size: 1.7rem;
    font-weight: 400;
    background-color: var(--primary-color);
    border: 1px solid var(--brand-color);
    border-radius: 0.5px;
    display: inline-block;
    color: var(--brand-color);
    transition: all 0.3s ease-in-out;
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.4), 0px 0px 50px rgba(0, 0, 0, 0);
    transform-style: preserve-3d;
    padding: 1rem;
    overflow: hidden;
    &:hover {
      color: var(--black);
      /* background-color: var(--shadow-color); */
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
