import React from "react";
import styled from "styled-components";

export default function ExperienceInfoItem({
  title,
  company,
  period,
  desc1,
  desc2,
  desc3,
  desc4,
  desc5,
  stacks,
}) {
  return (
    <ExperienceInfoItemStyles>
      <div className="experienceItem__info">
        <h3 className="experienceItem__title">{title}</h3>
        <p className="experienceItem__company">{company}</p>
        <p className="experienceItem__period">{period}</p>
        <div className="experienceItem__desc__section">
          <ul>
            <li>{desc1}</li>
            <li>{desc2}</li>
            <li>{desc3}</li>
            <li>{desc4}</li>
            <li>{desc5}</li>
          </ul>
        </div>
        <p className="experienceItem__stacks">{stacks}</p>
      </div>
    </ExperienceInfoItemStyles>
  );
}

const ExperienceInfoItemStyles = styled.div`
  display: grid;
  padding-top: 3rem;
  .experienceItem__info {
    border: 1px solid var(--font-color);
    padding: 1rem;
    border-radius: 1px;
    overflow: hidden;
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.4), 0px 0px 50px rgba(0, 0, 0, 0);
    transform-style: preserve-3d;
    &:hover {
      transform: scale(1.1);
      transform: translate(7px, -7px);
      transform-style: preserve-3d;
      transition: all 0.2s ease-in-out;
      box-shadow: 5px 10px var(--shadow-color);
      .experienceItem__title {
        color: var(--brand-color);
      }
    }
  }
  .experienceItem__title {
    font-size: 2rem;
    font-weight: 800;
    padding-top: 0.5rem;
    padding-bottom: 1rem;
  }
  .experienceItem__company {
    border-top: 1px solid var(--font-color);
    font-size: 1.7rem;
    font-weight: 600;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .experienceItem__period {
    border-top: 1px solid var(--font-color);
    font-size: 1.7rem;
    font-weight: 400;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--font-color);
  }
  .experienceItem__desc__section {
    padding: 2rem;
    font-size: 1.7rem;
    font-weight: 400;
    border-bottom: 1px solid var(--font-color);
  }
  .experienceItem__stacks {
    margin-top: 1rem;
    font-size: 1.4rem;
    font-family: var(--stacks-font);
  }
`;
