import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Button({ btnText, btnLink, outline = false }) {
  return (
    <ButtonStyle outline={outline}>
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 1.7rem;
    font-weight: 400;
    border: 1px solid var(--brand-color);
    color: var(--brand-color);
    border-radius: 1px;
    display: inline-block;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.4), 0px 0px 50px rgba(0, 0, 0, 0);
    transform-style: preserve-3d;
    padding: 1rem;
    overflow: hidden;
    &:hover {
      color: var(--black);
      background-color: var(--brand-color);
      transform: scale(1.1);
      transform: translate(7px, -7px);
      transform-style: preserve-3d;
      transition: all 0.2s ease-in-out;
      box-shadow: 5px 10px var(--shadow-color);
    }
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;
