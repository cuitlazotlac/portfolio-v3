import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function PortfolioItem({ portfolioItem }) {
  return (
    <PortfolioItemStyled>
      {portfolioItem.map((item) => {
        return (
          <>
            <Link to="/projects" className="projectItem__img">
              <img src={item.image} alt="project img" />
            </Link>
            <div className="portfolioItem__info" key={item.id}>
              <h3 className="portfolioItem__title">{item.title}</h3>
              <div className="portfolioItem__desc__section">
                <p className="portfolioItem__desc">{item.desc}</p>
              </div>
              <div className="portfolioItem__stacks__section">
                <p className="portfolioItem__stacks">{item.stacks}</p>
              </div>
              <div className="portfolioItem__links__section">
                <a href={item.link1} target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href={item.link2} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </>
        );
      })}
    </PortfolioItemStyled>
  );
}

const PortfolioItemStyled = styled.div`
  .portfolioItem__img {
    width: 100%;
    height: 400px;
    border-radius: 1px;
    overflow: hidden;
    display: inline-block;
    border: 1px solid var(--font-color);
    img {
      height: 100%;
    }
  }
  .portfolioItem__info {
    border: 1px solid var(--font-color);
    padding: 1rem;
    border-radius: 1px;
  }
  .portfolioItem__title {
    font-size: 2.2rem;
    padding-bottom: 1rem;
  }
  .portfolioItem__desc__section {
    border-top: 1px solid var(--font-color);
  }
  .portfolioItem__desc {
    font-size: 1.6rem;
    margin-top: 1rem;
    padding-bottom: 1rem;
  }
  .portfolioItem__links__section {
    border-top: 1px solid var(--font-color);
    svg {
      max-width: 8%;
      margin-top: 1rem;
      margin-left: 1rem;
    }
  }
  .portfolioItem__stacks {
    border-top: 1px solid var(--font-color);
    padding: 1rem;
    font-size: 1.3rem;
    font-family: var(--stacks-font);
  }
  @media only screen and (max-width: 768px) {
    .portfolioItem__img {
      height: 350px;
    }
  }
`;
