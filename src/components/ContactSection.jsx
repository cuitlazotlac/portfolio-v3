import React from "react";
import styled from "styled-components";

import ContactInfoItem from "./ContactInfoItem";
import SectionTitle from "./SectionTitle";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";

import { FaCodepen } from "react-icons/fa";
import { FaAngellist } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="contact" subheading="get in touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem
              icon={<FaGithub />}
              text="github.com/cuitlazotlac"
              cardLink="https://www.freefonts.io/geomanist-font-family/"
            />
            <ContactInfoItem
              icon={<FaLinkedin />}
              text="linkedin.com/in/hayssem-elsayed"
              cardLink="https://www.freefonts.io/geomanist-font-family/"
            />
            <ContactInfoItem
              icon={<FaBehance />}
              text="behance.net/cuitlazotlac"
              cardLink="https://www.freefonts.io/geomanist-font-family/"
            />
          </div>
          <div className="right">
            <ContactInfoItem
              icon={<FaCodepen />}
              text="codepen.io/cuitlazotlac"
              cardLink="https://www.freefonts.io/geomanist-font-family/"
            />
            <ContactInfoItem
              icon={<FaAngellist />}
              text="angel.co/u/hayssem-elsayed"
              cardLink="https://angel.co/u/hayssem-elsayed"
            />
            <ContactInfoItem
              icon={<FaMailBulk />}
              text="heyhayssem@gmail.com"
              cardLink="https://www.freefonts.io/geomanist-font-family/"
            />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 1rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 50%;
    background-color: var(--background-color);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    width: 100%;
    max-width: 500px;
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
  }
`;