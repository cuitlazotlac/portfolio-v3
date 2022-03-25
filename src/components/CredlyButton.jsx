import React from "react";

import styled from "styled-components";
import credly from "../assets/images/credly.png";

export default function CredlyButton() {
  return (
    <CredlyButtonStyled>
      <a
        href="https://www.credly.com/users/hayssem-elsayed/badges"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <img src={credly} alt="credly"></img>
      </a>
    </CredlyButtonStyled>
  );
}

const CredlyButtonStyled = styled.button`
  margin-top: 2rem;
  padding: 0.8rem;
  background-color: var(--primary-color);
  width: 160px;
  height: 42.95px;
  border: 1px solid var(--font-color);
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.4), 0px 0px 50px rgba(0, 0, 0, 0);
  img {
    max-width: 36%;
  }
  &:hover {
    background-color: #fac3a1;
    transform: scale(1.1);
    transform: translate(7px, -7px);
    transform-style: preserve-3d;
    transition: all 0.2s ease-in-out;
    box-shadow: 5px 10px var(--shadow-color);
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
      width: 160px;
      height: 43.95px;
    }
  }
  @media only screen and (max-width: 768px) {
    font-size: 0.95rem;
    width: 160px;
    height: 43.95px;
  }
`;
