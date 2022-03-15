import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProjectImg from "../assets/images/projects/img1.svg";

export default function ProjectItem({
  // img = ProjectImg,
  title = "Project Name",
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  img = { ProjectImg },
}) {
  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemStyles>
  );
}

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 1px;
    overflow: hidden;
    display: inline-block;
    border: 1px solid var(--font-color);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    border: 1px solid var(--font-color);
    padding: 1rem;
    border-radius: 1px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;
