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
    font-size: 6rem;
    color: var(--brand-color);
    font-weight: 900;
    text-transform: uppercase;
  }
  p {
    font-family: var(--stacks-font);
    color: var(--brand-color);
    font-weight: 400;
    font-size: 1.6rem;
    text-transform: uppercase;
    letter-spacing: 1.4rem;
    line-height: 14px;
    margin-bottom: 4px;
  }

  @media only screen and (max-width: 768px) {
    text-align: left;
    h2 {
      font-size: 3.6rem;
    }
    p {
      font-size: 1.5rem;
      line-height: 25px;
    }
  }
`;
