import React from "react";
import styled from "styled-components";
import PText from "./shared/PText";

export default function ContactInfoItem({ icon, text, cardLink }) {
  return (
    <ItemStyles>
      <a href={cardLink} target="_blank" rel="noreferrer" className="container">
        <div className="icon">{icon}</div>
        <div className="info">
          <PText>{text}</PText>
        </div>
      </a>
    </ItemStyles>
  );
}

const ItemStyles = styled.div`
  .container {
    padding: 2rem;
    border: 1px solid var(--font-color);
    display: flex;
    align-items: center;
    gap: 2rem;
    border-radius: 1px;
    margin-bottom: 2rem;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.4), 0px 0px 50px rgba(0, 0, 0, 0);
    transform-style: preserve-3d;
    overflow: hidden;
    &:hover {
      transform: scale(1.1);
      transform: translate(7px, -7px);
      transform-style: preserve-3d;
      transition: all 0.2s ease-in-out;
      box-shadow: 5px 10px var(--shadow-color);
    }
  }
  .icon {
    background-color: var(--brand-color);
    padding: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
    width: 3.5rem;
    color: var(--icon-color);
  }
  @media only screen and (max-width: 768px) {
    svg {
      width: 2rem;
    }
  }
`;
