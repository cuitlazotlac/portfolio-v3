import React from "react";
import styled from "styled-components";
// import PText from "./shared/PText";

export default function AboutInfoItem({ title = "", items = [""] }) {
  return (
    <AboutItemStyles>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </AboutItemStyles>
  );
}

const AboutItemStyles = styled.div`
  font-family: var(--stacks-font);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin-top: 3.5rem;
  .title {
    font-size: 2rem;
    font-weight: 400;
  }
  .items {
    display: flex;
    gap: 1rem;
    position: absolute;
    left: 18rem;
  }
  .item {
    font-weight: 200;
    p {
      font-size: 1.5rem;
    }
    border: 1px solid var(--font-color);
    background-color: var(--background-color);
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
      background-color: var(--secondary-color);
      border: 1px solid var(--brand-color);
      p {
        color: var(--brand-color);
      }
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
    }
    .title {
      font-size: 2rem;
    }
  }
`;
