import React, { useState } from "react";
import styled from "styled-components";

import SectionTitle from "../components/shared/SectionTitle";
import PortfolioItem from "../components/PortfolioItem";
import Filter from "../components/Filter";

import portfolios from "../assets/data/portfolios";

import { useTranslation } from "react-i18next";

const allButtons = ["All", ...new Set(portfolios.map((item) => item.category))];

export default function Portfolios() {
  const { t } = useTranslation();
  const [portfolioItem, setPortfolioItems] = useState(portfolios);
  const [button] = useState(allButtons);

  const filter = (button) => {
    if (button === "All") {
      setPortfolioItems(portfolios);
      return;
    }

    const filteredData = portfolios.filter((item) => item.category === button);
    setPortfolioItems(filteredData);
  };

  return (
    <>
      <PortfolioStyle>
        <div className="container">
          <SectionTitle
            heading={t("Portfolio.SectionTitle")}
            subheading={t("Portfolio.SectionDescription")}
          />
          <Filter filter={filter} button={button} />
          <br />
          <br />
          <div className="portfolio__allItems">
            <PortfolioItem portfolioItem={portfolioItem} />
          </div>
        </div>
      </PortfolioStyle>
    </>
  );
}

const PortfolioStyle = styled.div`
  padding: 10rem 0;
  width: 100%;
  .portfolio__allItems {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    @media screen and (max-width: 920px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 670px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
  }
`;
