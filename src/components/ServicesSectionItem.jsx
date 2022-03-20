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
    </ItemStyles>
  );
}

const ItemStyles = styled.div`
  text-align: center;
  .servicesItem__icon {
    svg {
      width: 3rem;
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
