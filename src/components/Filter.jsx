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
  border: 1px solid var(--filter-text);
  color: var(--filter-text);
  /* background-color: var(--white); */
  padding: 0.45em 1.7em;
  font-size: 1.2rem;
  font-family: var(--stacks-font);
  border-radius: 20px;
  box-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.4), 0px 0px 50px rgba(0, 0, 0, 0);
  transition: all 0.4s ease-in-out;
  margin-right: 1.4rem;
  margin-bottom: 0.6rem;
  transform-style: preserve-3d;
  overflow: hidden;
  &:active,
  &:focus {
    border: 1px solid var(--filter-background);
    color: var(--filter-text);
    background-color: var(--filter-background);
  }

  &:hover {
    background-color: var(--filter-background);
    border: 1px solid var(--filter-background);
    color: var(--filter-text);
    transform: scale(0.1);
    transform: translate(1px, -1px);
    transform-style: preserve-3d;
    transition: all 0.2s ease-in-out;
    box-shadow: 2px 5px var(--shadow-color);
  }
`;
