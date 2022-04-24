import React, { useEffect } from "react";

import { FaDharmachakra } from "react-icons/fa";
import { FaBezierCurve } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";

import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import ServicesSectionItem from "./ServicesSectionItem";

import Aos from "aos";
import "aos/dist/aos.css";

import { useTranslation } from "react-i18next";

export default function ServicesSection() {
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init({ duration: 2000 });
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
            icon={<FaDharmachakra />}
            title={t("Expertise.Title1")}
            desc={t("Expertise.Description1")}
          />
          <ServicesSectionItem
            icon={<FaBezierCurve />}
            title={t("Expertise.Title2")}
            desc={t("Expertise.Description2")}
          />
          <ServicesSectionItem
            icon={<FaLayerGroup />}
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
