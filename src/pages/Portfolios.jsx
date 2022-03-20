import React, { useState } from "react";
import styled from "styled-components";

import SectionTitle from "../components/SectionTitle";
import PortfolioItem from "../components/PortfolioItem";
import Filter from "../components/Filter";

import portfolios from "../assets/data/portfolios";

import { useTranslation } from "react-i18next";

const allButtons = ["All", ...new Set(portfolios.map((item) => item.category))];

export default function Portfolios() {
  const { t, i18n } = useTranslation();
  const [portfolioItem, setPortfolioItems] = useState(portfolios);
  const [button, setButtons] = useState(allButtons);

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
            heading={t("Project.Placeholder")}
            subheading={t("Project.Placeholder")}
          />
          <Filter filter={filter} button={button} />
          <PortfolioItem portfolioItem={portfolioItem} />
        </div>
      </PortfolioStyle>
    </>
  );
}

const PortfolioStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    border-radius: 1px;
    outline: none;
    border: none;
  }
  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .projects__searchBar .searchIcon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
  }
`;
