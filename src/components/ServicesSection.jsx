import React, { useEffect } from "react";

import { FaDharmachakra } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa";

import { FiMap } from "react-icons/fi";
import { FiEdit3 } from "react-icons/fi";
import { FiDatabase } from "react-icons/fi";

import styled from "styled-components";
import SectionTitle from "./shared/SectionTitle";
import ServicesSectionItem from "./ServicesSectionItem";

import Aos from "aos";
import "aos/dist/aos.css";

import { useTranslation } from "react-i18next";

export default function ServicesSection() {
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init({ offset: 400, duration: 1000 });
    // Aos.init({ delay: 0, duration: 1000 });
  }, []);

  return (
    <ServicesItemsStyles>
      <div className="container" data-aos="fade-left">
        <SectionTitle
          subheading={t("Expertise.SectionDescription")}
          heading={t("Expertise.SectionTitle")}
        />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<FiMap />}
            title={t("Expertise.Title1")}
            desc={t("Expertise.Description1")}
          />
          <ServicesSectionItem
            icon={<FiEdit3 />}
            title={t("Expertise.Title2")}
            desc={t("Expertise.Description2")}
          />
          <ServicesSectionItem
            icon={<FiDatabase />}
            title={t("Expertise.Title3")}
            desc={t("Expertise.Description3")}
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}

const ServicesItemsStyles = styled.div`
  padding-top: 2rem;
  padding-bottom: 10rem;
  .services__allItems {
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;
