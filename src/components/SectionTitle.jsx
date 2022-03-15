import React from "react";
import styled from "styled-components";

export default function SectionTitle({
  subheading = "Subheading",
  heading = "Heading",
}) {
  return (
    <SectionTitleStyle className="section-title">
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
    font-family: var(--main-font);
    font-size: 2rem;
  }
  h2 {
    font-family: var(--secondary-font);
    font-size: 6rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`;
