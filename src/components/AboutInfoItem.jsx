import React from "react";
import styled from "styled-components";
import PText from "./PText";

export default function AboutInfoItem({ title = "", items = [""] }) {
  return (
    <AboutItemStyles>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <PText>{item}</PText>
          </div>
        ))}
      </div>
    </AboutItemStyles>
  );
}

const AboutItemStyles = styled.div`
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
    font-weight: 200;
  }
  .item {
    border: 1px solid var(--font-color);
    background-color: var(--primary-color);
    border-radius: 1px;
    padding: 1rem;
    transition: all 0.3s ease-in-out;
    transform-style: preserve-3d;
    overflow: hidden;
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
