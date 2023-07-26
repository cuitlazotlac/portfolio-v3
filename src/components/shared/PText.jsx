import React from "react";
import styled from "styled-components";

export default function PText({ children }) {
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}

const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 2rem;
  line-height: 1.3em;
  font-weight: 400;
  @media only screen and (max-width: 768px) {
    font-size: 1.6rem;
    /* font-weight: 500; */
  }
`;
