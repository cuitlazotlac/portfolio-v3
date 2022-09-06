import React from "react";
import styled from "styled-components";

import ScrollDownArrow from "../assets/images/scroll-down-arrow.svg";

import { FaBehanceSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

import Typical from "../components/shared/Typical";

import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>
              <Typical
                as="h1"
                main_title={t("Hero.Headline0")}
                title_1={t("Hero.Headline1")}
                title_2={t("Hero.Headline2")}
                title_3={t("Hero.Headline3")}
                title_4={t("Hero.Headline4")}
                title_5={t("Hero.Headline5")}
              />
            </span>
            <span className="hero__name">{t("Hero.Title")}</span>
          </h1>
          <br />
          <div className="hero__info">
            <p>{t("Hero.Description_Part1")}</p>
            <br />
            <p>{t("Hero.Description_Part2")}</p>
            <br />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>{t("Hero.Connect")}</p>
              <br />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="https://github.com/cuitlazotlac"
                    target="_blank"
                    rel="noreferrer"
                    className="icon"
                  >
                    <FaGithubSquare />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/hayssem-elsayed/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.behance.net/cuitlazotlac"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaBehanceSquare />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:heyhayssem@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaMailBulk />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>{t("Hero.Scroll")}</p>
            <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    text-align: left;
    font-size: 2.4rem;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-size: 5rem;
      color: var(--brand-color);
    }
  }
  .hero__info {
    margin-top: 5rem;
    display: block;
    font-size: 2rem;
    font-weight: 400;
    text-align: left;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }
  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    font-family: var(--secondary-font);
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 2.5rem;
          transform: rotate(360deg);
          letter-spacing: 3px;
          margin-bottom: 1rem;
        }
        &:hover {
          svg {
            fill: var(--brand-color);
          }
        }
      }
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1400px) {
    padding: 10rem 0;
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.7rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      p {
        font-size: 1.8rem;
      }
      font-size: 1.6rem;
      margin-top: 3rem;
    }
    .hero__social {
      left: 15px;
      bottom: -20%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.8rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 20px;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 3rem 0;
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.7rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 3.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 7rem;
      p {
        font-size: 1.6rem;
      }
      h3 {
        font-size: 1.6rem;
        font-weight: 500;
      }
    }
    .hero__social {
      left: 20px;
      bottom: -20%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.8rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 10px;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;
