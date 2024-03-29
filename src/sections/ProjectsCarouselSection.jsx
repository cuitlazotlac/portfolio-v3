import React, { useEffect } from "react";
import styled from "styled-components";
import "swiper/swiper-bundle.min.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import ProjectItem from "../components/ProjectItem";
import SectionTitle from "../components/shared/SectionTitle";
import Button from "../components/Button";

import projects from "../assets/data/projects";

import Aos from "aos";
import "aos/dist/aos.css";

import { useTranslation } from "react-i18next";

// install Swiper modules
SwiperCore.use([Navigation]);

export default function ProjectsSection() {
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init({ offset: 400, duration: 1000 });
    // Aos.init({ delay: 0, duration: 1000 });
  }, []);

  return (
    <ProjectSectionStyle>
      <div className="container" data-aos="fade-right">
        <SectionTitle
          subheading={t("ProjectSwiper.SectionDescription")}
          heading={t("ProjectSwiper.SectionTitle")}
        />
        <div className="projects__allItems">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {projects.map((project, index) => {
              if (index >= 5) return null;
              return (
                <SwiperSlide key={project.id}>
                  <div className="item">
                    <ProjectItem
                      title={project.name}
                      link1={project.link1}
                      link2={project.link2}
                      image={project.image}
                      animation={project.animatation}
                      desc={project.desc}
                      stacks={project.stacks}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="buttons-row">
          <Button
            btnText={t("ProjectSwiper.More")}
            btnLink="/projects"
            outline
          ></Button>
        </div>
        <br />
      </div>
    </ProjectSectionStyle>
  );
}

const ProjectSectionStyle = styled.div`
  padding: 2rem 0 10rem 0;
  width: 100%;
  display: grid;
  .swiper-wrapper {
    /* background-color: blue; */
    /* grid-gap: 100px; */
  }
  .projects__allItems {
    display: grid;
    gap: 3rem;
    margin-top: 1rem;
  }
  .swiper-container {
    padding-top: 8rem;
    width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: var(--secondary-color);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--font-color);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  .buttons-row {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  @media only screen and (max-width: 768px) {
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
      .projectItem__img {
        width: 100%;
      }
    }
  }
`;
