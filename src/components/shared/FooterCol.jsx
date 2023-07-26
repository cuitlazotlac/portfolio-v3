import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function FooterCol({
  heading = "Col Heading",
  links = [
    {
      type: "Link",
      title: "Home",
      path: "/home",
    },
    {
      type: "Link",
      title: "About",
      path: "/about",
    },
  ],
}) {
  return (
    <ColStyle>
      <h2 className="heading">{heading}</h2>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            {item.type === "Link" ? (
              <Link to={item.path}>{item.title}</Link>
            ) : (
              <a href={item.path} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </ColStyle>
  );
}

const ColStyle = styled.div`
  .heading {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }
  li {
    margin-bottom: 1rem;
    &:hover {
      color: var(--brand-color);
      font-weight: 900;
    }
  }
  a {
    font-size: 1.5rem;
    font-weight: 200;
    &:hover {
      font-weight: bold;
    }
  }
`;
