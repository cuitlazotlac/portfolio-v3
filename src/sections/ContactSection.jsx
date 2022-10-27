import React from "react";
import styled from "styled-components";

import ContactInfoItem from "../components/ContactInfoItem";
import SectionTitle from "../components/shared/SectionTitle";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";

import { FaCodepen } from "react-icons/fa";
import { FaAngellist } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion/dist/framer-motion";

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <ContactSectionStyle>
      <div className="container">
        <motion.div
          initial={{ y: "100%", opacity: 1 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.77, ease: "easeOut" }}
          exit={{ opacity: 1 }}
        >
          <SectionTitle
            heading={t("Contact.MainTitle")}
            subheading={t("Contact.SubsectionTitle")}
          />
        </motion.div>
        <motion.div
          initial={{ y: "100%", opacity: 1 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.79, ease: "easeOut" }}
          exit={{ opacity: 1 }}
        >
          <div className="contactSection__wrapper">
            <div className="left">
              <ContactInfoItem
                icon={<FaGithub />}
                text="github.com/cuitlazotlac"
                cardLink="https://github.com/cuitlazotlac"
              />
              <ContactInfoItem
                icon={<FaLinkedin />}
                text="linkedin.com/in/hayssem-elsayed"
                cardLink="https://www.linkedin.com/in/hayssem-elsayed/"
              />
              <ContactInfoItem
                icon={<FaBehance />}
                text="behance.net/cuitlazotlac"
                cardLink="https://www.behance.net/cuitlazotlac"
              />
            </div>
            <div className="right">
              <ContactInfoItem
                icon={<FaCodepen />}
                text="codepen.io/cuitlazotlac"
                cardLink="https://codepen.io/cuitlazotlac"
              />
              <ContactInfoItem
                icon={<FaAngellist />}
                text="angel.co/u/hayssem-elsayed"
                cardLink="https://angel.co/u/hayssem-elsayed"
              />
              <ContactInfoItem
                icon={<FaMailBulk />}
                text="heyhayssem@gmail.com"
                cardLink="mailto:heyhayssem@gmail.com"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </ContactSectionStyle>
  );
}

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  svg {
    fill: var(--secondary-color);
  }
  .contactSection__wrapper {
    display: flex;
    gap: 1rem;
    margin-top: 7rem;
    justify-content: space-evenly;
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
