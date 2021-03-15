import React, { ReactElement, useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

import Section from "./common/Section";
import Velcro from "./common/Velcro";

const WorkSectionVelcro = styled(Velcro)`
  left: 0;
  padding-top: 8rem;
  padding-bottom: 6rem;
  justify-content: space-between;
  & > h1 {
    color: #fff;
  }
  & > footer {
    color: #c5977e;
    font-size: 1.857vh;
    display: flex;
    flex-direction: column;
    & > span {
      &:first-child {
        margin-bottom: 2rem;
      }
    }
  }
`;
const WorkCollection = styled.ul`
  display: flex;
  height: 100%;
  flex-wrap: nowrap;
  & > li {
    width: 100%;
    & > img {
      width: 100vw;
      height: 100%;
    }
  }
`;
const WorkSectionContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;
const WorkSectionBlock = styled(Section)`
  transform: translateX(-1px);
  padding: 6.3rem;
  padding-top: 8.3rem;
  box-sizing: border-box;
`;

const WorkSection = (): ReactElement => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const collectionImgRef = useRef<HTMLUListElement>(null);
  const velcroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (
      velcroRef.current?.children[1] !== undefined &&
      sectionRef.current !== null &&
      collectionImgRef.current !== null
    ) {
      const sectionWidth = sectionRef.current.offsetWidth;
      const collectionImgWidth = collectionImgRef.current.offsetWidth;
      const tl = gsap.timeline({ paused: true });

      gsap.to(sectionRef.current?.children[0], {
        scrollTrigger: {
          trigger: sectionRef.current?.children[0],
          // markers: true,
          scrub: true,
          start: () => `+=${1920 * 2 - 135}`,
          end: () => "+=" + (sectionWidth * 2 + collectionImgWidth)
        },
        x: "-100%"
      });

      const velcroTl = tl
        .fromTo(
          velcroRef.current,
          {
            width: "0px",
            padding: "0 0",
            duration: 1
          },
          {
            width: "23.333%",
            padding: "8rem 4.4rem 6rem",
            minWidth: "276px"
          }
        )
        .from(velcroRef.current.children, {
          autoAlpha: 0,
          duration: 1
        });

      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: true,
          start: () => "+=" + 1300,
          end: () => "+=" + 1350,
          onLeave: () => {
            velcroTl.play();
          },
          onEnterBack: () => {
            velcroTl.reverse();
          }
        },
        height: "50vh"
      });
    }
  }, []);

  return (
    <WorkSectionBlock id="WorkSection">
      <WorkSectionContent ref={sectionRef}>
        <WorkCollection ref={collectionImgRef}>
          <li>
            <img src="public/img/bg_2.png"></img>
          </li>
          <li>
            <img src="public/img/bg_3.png"></img>
          </li>
        </WorkCollection>
        <WorkSectionVelcro ref={velcroRef}>
          <h1>책 검색 / 추천 웹 앱</h1>
          <p>
            프론트엔드라면 API를 이용해서 뭔가 흥미로운 기능을 만들 수
            있어야한다! 라고 생각해서 시작한 프로젝트입니다.
            <br />
            Naver 검색 API를 사용해서 책을 검색할 수 있고, 추천하고 싶은 책에
            대한 글을 작성하여 게시판에 게시할 수 있는 웹사이트입니다.
          </p>
          <footer>
            <span>
              <a href="#">DEMO 사이트 이동</a>
            </span>
            <span>
              <a href="#">Project 보기</a>
            </span>
          </footer>
        </WorkSectionVelcro>
      </WorkSectionContent>
    </WorkSectionBlock>
  );
};

export default WorkSection;
