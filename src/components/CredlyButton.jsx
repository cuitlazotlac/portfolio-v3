import React from "react";

import styled from "styled-components";
import credly from "../assets/images/credly.png";

export default function CredlyButton() {
  return (
    <a
      href="https://www.credly.com/users/hayssem-elsayed/badges"
      target="_blank"
      rel="noreferrer"
    >
      <CredlyButtonStyled>
        <img src={credly} alt="credly"></img>
      </CredlyButtonStyled>
    </a>
  );
}

const CredlyButtonStyled = styled.button`
  margin-top: 2rem;
  padding: 0.35em 1.5em;
  background-color: #fac3a1;
  border: 1px solid var(--font-color);
  img {
    width: 144px;
    height: 25.9px;
  }

  &:hover {
    // background-color: var(--secondary-color);
    // border: 1px solid var(--background-color);
    transform: scale(1.1);
    transform: translate(7px, -7px);
    transform-style: preserve-3d;
    transition: all 0.2s ease-in-out;
    box-shadow: 5px 10px var(--secondary-color);
  }
  &:active,
  &:focus {
    background-color: var(--secondary-color);
    color: var(--brand-color);
    border: 1px solid var(--secondary-color);
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
  @media only screen and (max-width: 768px) {
    font-size: 0.95rem;
  }
`;
