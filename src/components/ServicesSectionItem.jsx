import React from "react";
import styled from "styled-components";
import PText from "./shared/PText";

export default function ServicesSectionItem({
  icon = "",
  title = "",
  desc = "",
}) {
  return (
    <ItemStyles className="servicesItem">
      <div className="servicesItem__icon">
        <img src={icon} alt="project_img" />
      </div>
      <div className="servicesItem__title">{title}</div>
      <PText>{desc}</PText>
      <br />
    </ItemStyles>
  );
}

const ItemStyles = styled.div`
  text-align: center;
  border: 1px solid var(--font-color);
  border-radius: 2px;
  width: 100%;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.4), 0px 0px 50px rgba(0, 0, 0, 0);
  transform-style: preserve-3d;
  width: 100%;
  padding: 1rem;
  overflow: hidden;
  img {
    max-width: 50px;
  }
  /* &:hover {
    transform: scale(1.1);
    transform: translate(7px, -7px);
    transform-style: preserve-3d;
    transition: all 0.2s ease-in-out;
    box-shadow: 5px 10px var(--shadow-color);
  } */
  .servicesItem__icon {
    margin-top: 1rem;
    svg {
      width: 3.5rem;
      stroke-width: 1.55px;
    }
  }
  .servicesItem__title {
    font-size: 1.8rem;
    font-weight: 600;
    margin-top: 2rem;
    text-transform: uppercase;
  }
  .para {
    margin-top: 2rem;
    font-size: 1.8rem;
  }
`;
