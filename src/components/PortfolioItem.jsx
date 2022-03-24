import React from "react";
import styled from "styled-components";

import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function PortfolioItem({ portfolioItem }) {
  return (
    <>
      {portfolioItem.map((item) => {
        return (
          <ProjectItemStyles>
            <div className="item">
              <div className="projectItem__img">
                <img src={item.image} alt="project img" />
              </div>
              <div className="projectItem__info" key={item.id}>
                <h3 className="projectItem__title">{item.title}</h3>
                <div className="projectItem__desc__section">
                  <p className="projectItem__desc">{item.desc}</p>
                </div>
                <div className="projectItem__stacks__section">
                  <p className="projectItem__stacks">{item.stack}</p>
                </div>
                <div className="projectItem__links__section">
                  <a href={item.link1} target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>
                  <a href={item.link2} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          </ProjectItemStyles>
        );
      })}
    </>
  );
}

const ProjectItemStyles = styled.div`
  display: grid;
  .item {
    border: 1px solid var(--font-color);
    transition: all 0.3s ease-in-out;
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.4), 0px 0px 50px rgba(0, 0, 0, 0);
    transform-style: preserve-3d;
    width: 100%;
    padding: 1rem;
    overflow: hidden;
    &:hover {
      transform: scale(1.1);
      transform: translate(7px, -7px);
      transform-style: preserve-3d;
      transition: all 0.2s ease-in-out;
      box-shadow: 5px 10px var(--shadow-color);
    }
  }
  .projectItem__img {
    width: 100%;
    border-radius: 1px;
    overflow: hidden;
    display: inline-block;
    border-bottom: 1px solid var(--font-color);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    padding: 1rem;
    border-radius: 1px;
  }
  .projectItem__title {
    font-size: 2.2rem;
    padding-bottom: 1rem;
  }
  .projectItem__desc__section {
    border-top: 1px solid var(--font-color);
  }
  .projectItem__desc {
    font-size: 1.6rem;
    margin-top: 1rem;
    padding-bottom: 1rem;
  }
  .projectItem__links__section {
    border-top: 1px solid var(--font-color);
    svg {
      max-width: 6%;
      margin-top: 1rem;
      margin-left: 1rem;
    }
  }
  .projectItem__stacks {
    border-top: 1px solid var(--font-color);
    padding: 1rem;
    font-size: 1.3rem;
    font-family: var(--stacks-font);
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;
