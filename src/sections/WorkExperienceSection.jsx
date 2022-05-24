import React, { useState } from "react";
import styled from "styled-components";

export default function WorkExperiencesSection() {
  function handleClick(e) {
    const target = e.target;
    const tabNum = target.dataset.tab;
    const activeTab = document.querySelector(".tabs .active");
    const activeContent = document.querySelector(".content .visible");
    const currentContent = document.querySelector(
      `.content__section[data-tab='${tabNum}']`
    );

    if (!tabNum) {
      return;
    }

    activeTab.classList.remove("active");
    target.classList.add("active");
    activeContent.classList.remove("visible");
    currentContent.classList.add("visible");
  }

  const tabs = document.querySelector(".tabs");
  if (tabs) {
    tabs.addEventListener("click", (e) => handleClick(e));
  }
  return (
    <WorkExperiencesStyles>
      <div class="container">
        <div class="tabs">
          <a class="tab tab-1 active" href="#" data-tab="1">
            Tab 1
          </a>
          <a class="tab tab-2" href="#" data-tab="2">
            Tab 2
          </a>
          <a class="tab tab-3" href="#" data-tab="3">
            Tab 3
          </a>
          <span class="highlighter"></span>
        </div>

        <div class="content">
          <div class="content__section visible" data-tab="1">
            <p>
              Lorem ipsum dolor amet umami kogi you probably haven't heard of
              them activated charcoal hexagon literally. Vice art party XOXO
              retro blue bottle. Squid tousled skateboard man bun pabst unicorn
              sriracha poutine echo park crucifix plaid health goth four dollar
              toast. XOXO gochujang PBRB kombucha brooklyn street art lyft swag.
            </p>
          </div>

          <div class="content__section" data-tab="2">
            <p>
              Wayfarers small batch brooklyn, pabst godard flannel blog
              authentic fingerstache salvia disrupt kombucha pickled. Actually
              hammock semiotics DIY cold-pressed lo-fi swag franzen chia
              locavore. Biodiesel venmo irony, salvia shaman plaid photo booth
              keffiyeh VHS slow-carb chillwave knausgaard vape occupy.
            </p>
          </div>

          <div class="content__section" data-tab="3">
            <p>
              Gluten-free you probably haven't heard of them jianbing pitchfork
              pabst. Kombucha occupy iPhone live-edge beard iceland freegan
              small batch before they sold out DIY marfa chillwave sustainable
              taiyaki bushwick. Meggings franzen kogi, next level fingerstache
              +1 kitsch YOLO activated charcoal craft beer adaptogen twee.
              Yuccie tumeric irony heirloom, shoreditch kinfolk swag
              cold-pressed 90's chicharrones.
            </p>
          </div>
        </div>
      </div>
    </WorkExperiencesStyles>
  );
}

const WorkExperiencesStyles = styled.div`
  .container {
    position: relative;
    margin: 0px;
    padding: 20px;
    display: flex;
    align-items: flex-start;

    .tabs {
      display: block;
      position: relative;
      z-index: 3;
      width: max-content;
      font-size: 1.8rem;

      .tab {
        /* width: 100px; */
        height: $tab-height;
        text-align: center;
        font-weight: bold;
        font-size: 1rem;
        font-weight: 800;
        padding-top: 0.5rem;
        padding-bottom: 1rem;
        padding: 10px 0;
        transition: all 0.25s ease;
        border-left: 2px solid #5f6368;

        &:hover {
          color: $purple;
        }

        &.active {
          color: $purple;
        }
      }
    }

    .content {
      position: relative;
      padding: 0 $spacing;

      &__section {
        position: absolute;
        top: 0;
        left: 0;
        color: red;
        opacity: 0;
        z-index: 0;
        transition: opacity 0s ease;

        &.visible {
          position: relative;
          font-size: 1.8rem;
          opacity: 1;
          width: 100%;
          height: auto;
          transition: opacity 0.5s ease;
          z-index: 2;
        }
      }
    }
  }
`;
