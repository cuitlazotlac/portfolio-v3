import React from "react";
import styled from "styled-components";

import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectItem({
  title = "",
  desc = "",
  stacks = "",
  link1 = "",
  link2 = "",
}) {
  return (
    <ProjectItemStyles>
      <div className="projectItem__info">
        <h3 className="projectItem__title">{title}</h3>
        <div className="projectItem__desc__section">
          <p className="projectItem__desc">{desc}</p>
        </div>
        <div className="projectItem__stacks__section">
          <p className="projectItem__stacks">{stacks}</p>
        </div>
        <div className="projectItem__links__section">
          <a href={link1} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href={link2} target="_blank" rel="noreferrer">
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </ProjectItemStyles>
  );
}

const ProjectItemStyles = styled.div`
  .projectItem__img {
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
  .projectItem__info {
    border: 1px solid var(--font-color);
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
      max-width: 8%;
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
