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
  text-align: left;
  h2 {
    font-family: var(--secondary-font);
    font-size: 6rem;
    font-weight: 900;
    text-transform: uppercase;
  }
  p {
    font-weight: 200;
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 768px) {
    text-align: left;
    h2 {
      font-size: 3.6rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;
