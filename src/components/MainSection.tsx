import React, { ReactElement, useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const Velcro = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 20%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-items: center;
  align-items: center;
  padding: 0 44px;
  box-sizing: border-box;
  & > p {
    font-size: 18px;
    line-height: 27px;
    color: #fff;
  }
`;
const ContentVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;
const MainSectionContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  overflow: hidden;
  & > h1 {
    margin: 0;
    margin-left: 75px;
    padding: 0;
    font-size: 48px;
    font-weight: bold;
    color: #fff;
  }
`;
const MainSectionBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  padding: 63px 83px;
  box-sizing: border-box;
`;

const MainSection = (): ReactElement => {
  const contentTitleRef = useRef<HTMLHeadingElement>(null);
  const velcroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (velcroRef.current?.children[0] !== undefined) {
      const tl = gsap.timeline();
      console.log(velcroRef);
      tl.from(contentTitleRef.current, {
        xPercent: 30,
        autoAlpha: 0,
        letterSpacing: "0.5em",
        duration: 2,
        ease: "ease-in"
      })
        .from(velcroRef.current, {
          width: 0,
          padding: 0,
          duration: 1
        })
        .from(velcroRef.current.children[0], {
          autoAlpha: 0,
          duration: 2
        });
    }
  }, []);

  return (
    <MainSectionBlock>
      <MainSectionContent>
        <ContentVideo loop muted autoPlay src="/public/img/city.mp4" />
        <h1 ref={contentTitleRef}>꾸준히 배우는 프론트엔드 개발자</h1>
        <Velcro ref={velcroRef}>
          <p>
            bebop은 Jazz 음악에서 부터 파생된 언어로, 빠른 템포에 강렬하고
            즉흥적인 연주 스타일을 뜻합니다.
            <br />
            code-bebop은 즉흥적이며 신나는 코딩을 지향하여 지은 닉네임입니다.
          </p>
        </Velcro>
      </MainSectionContent>
    </MainSectionBlock>
  );
};

export default MainSection;
