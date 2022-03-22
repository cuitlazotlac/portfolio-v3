import React from "react";
import styled from "styled-components";
import PText from "./PText";

export default function ServicesSectionItem({
  icon = "",
  title = "",
  desc = "",
}) {
  return (
    <ItemStyles className="servicesItem">
      <div className="servicesItem__icon">{icon}</div>
      <div className="servicesItem__title">{title}</div>
      <PText>{desc}</PText>
      <br />
    </ItemStyles>
  );
}

const ItemStyles = styled.div`
  text-align: center;
  border: 1px solid var(--font-color);
  width: 100%;
  .servicesItem__icon {
    margin-top: 1rem;
    svg {
      width: 4rem;
    }
  }
  .servicesItem__title {
    font-size: 2rem;
    font-weight: 700;
    margin-top: 2rem;
    text-transform: uppercase;
  }
  .para {
    margin-top: 2rem;
  }
`;
