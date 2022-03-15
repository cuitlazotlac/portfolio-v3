import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Button({
  btnText = "test",
  btnLink = "test",
  outline = false,
}) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2rem;
    background-color: ${(props) =>
      props.outline ? "transperant" : "var(--secondary-color)"};
    padding: 0.35em 1.5em;
    border: 1px solid var(--font-color);
    border-radius: 1px;
    display: inline-block;
    color: ${(props) => (props.outline ? "var(--gary-1)" : "black")};
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;
