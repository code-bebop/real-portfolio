import React, { ReactElement, useEffect, useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Section from "./common/Section";

gsap.registerPlugin(ScrollTrigger);

const WorkText = styled.div`
  font-size: 1.8rem;
  padding: 0 11.11vh;
  display: inline;
  width: 408px;
  & > h1 {
    font-size: 6.4rem;
  }
`;

const WorkImg = styled.img`
  width: 128.37vh;
  height: 83.07vh;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const WorkSectionContent = styled(Section)`
  display: inline-flex;
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: auto;
  & > p {
    display: inline;
  }
`;

const WorkSectionBlock = styled(Section)`
  padding-left: 128.33vh;
  padding-right: 81.34vh;
  width: auto;
  transform: translateX(-1px);
`;

const WorkSection = ({ isResized }: { isResized: number }): ReactElement => {
  const WorkImgRef = useRef<HTMLImageElement>(null);
  // const WorkImgTl = useRef<gsap.core.Timeline>();
  const WorkImgTween = useRef<gsap.core.Tween>();
  const WorkSectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (WorkImgRef.current !== null && WorkSectionRef.current !== null) {
      if (WorkImgTween.current) {
        ScrollTrigger.refresh();
        WorkImgTween.current.kill();
        ScrollTrigger.getById("WorkImg_1").kill(true);
      }
      const WorkImgRect = WorkImgRef.current.getBoundingClientRect();
      const WorkImgLeft = WorkImgRect.left;
      const WorkImgWidth = WorkImgRect.width;
      const WorkSectionLeft = WorkSectionRef.current.offsetLeft;

      console.log(WorkImgRect);
      console.log(WorkImgLeft);

      console.log(WorkSectionLeft);

      WorkImgTween.current = gsap.from(WorkImgRef.current, {
        scrollTrigger: {
          id: "WorkImg_1",
          trigger: WorkImgRef.current,
          markers: true,
          scrub: 2,
          // start: () =>
          //   `${
          //     WorkSectionLeft + document.documentElement.clientHeight
          //   }px center`,
          start: () => "2889px center",
          end: () => `+=${WorkImgWidth / 2}`
        },
        yPercent: -50
      });
      // .from(WorkImgRef.current, {
      //   yPercent: -50
      // });
    }
  }, [isResized]);

  return (
    <WorkSectionBlock ref={WorkSectionRef}>
      <WorkImg
        src="/public/img/bg_2.png"
        alt="프로젝트 이미지 1"
        ref={WorkImgRef}
      />
      <WorkText>
        <h1>Work 1</h1>
        <span>
          프론트엔드라면 API를 이용해서
          <br />
          뭔가 흥미로운 기능을 만들 수 있어야한다!
          <br />
          라고 생각해서 시작한 프로젝트입니다.
          <br />
          Naver 검색 API를 사용해서 책을 검색할 수 있고,
          <br />
          추천하고 싶은 책에 대한 글을 작성하여
          <br />
          게시판에 게시할 수 있는 웹사이트입니다.
        </span>
      </WorkText>
    </WorkSectionBlock>
  );
};

export default WorkSection;
