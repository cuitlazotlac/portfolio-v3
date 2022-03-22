import React from "react";
import styled from "styled-components";

export default function Filter({ filter, button }) {
  return (
    <>
      <br />
      {button.map((but, i) => {
        return (
          <FilterStyled key={i} onClick={() => filter(but)}>
            {but}
          </FilterStyled>
        );
      })}
    </>
  );
}

const FilterStyled = styled.button`
  border: 1px solid var(--font-color);
  background-color: var(--background-color);
  padding: 0.35em 1.5em;
  font-size: 1.6rem;
  font-family: var(--main-font);
  border-radius: 1px;
  box-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.4), 0px 0px 50px rgba(0, 0, 0, 0);
  transition: all 0.4s ease-in-out;
  margin-right: 1.4rem;
  margin-bottom: 0.6rem;
  transform-style: preserve-3d;
  overflow: hidden;

  &:active,
  &:focus {
    background-color: var(--secondary-color);
    color: var(--brand-color);
  }

  &:hover {
    background-color: var(--secondary-color);
    color: var(--brand-color);
    transform: scale(1.1);
    transform: translate(7px, -7px);
    transform-style: preserve-3d;
    transition: all 0.2s ease-in-out;
    box-shadow: 5px 10px var(--shadow-color);
  }
`;
