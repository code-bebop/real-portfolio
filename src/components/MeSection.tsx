import React, { ReactElement, useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "./common/Section";

gsap.registerPlugin(ScrollTrigger);
const MeSectionTextDes = styled.div``;
const MeSectionTextTitle = styled.div``;
const MeSectionText = styled.div`
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${MeSectionTextTitle} {
    & > strong {
      display: inline-block;
      font-size: 3.715vh;
      margin-left: 6.707vh;
      margin-bottom: 8.255vh;
      width: 100%;
    }
  }
  ${MeSectionTextDes} {
    & > p {
      line-height: 200%;
      display: inline-block;
      font-size: 2.476vh;
      margin-left: 155px;
      width: 100%;
    }
  }
`;
const MeSectionBlock = styled(Section)`
  width: 100vw;
  & > img {
    width: 25%;
    height: 50%;
    object-fit: cover;
    margin: 0 auto;
  }
`;

const MeSection = (): ReactElement => {
  const titleRef = useRef<HTMLDivElement>(null);
  const desRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current !== null) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: () => "+=" + 500,
          endTrigger: "html",
          end: "bottom top"
        }
      });
      tl.from(titleRef.current, {
        xPercent: 30,
        autoAlpha: 0,
        letterSpacing: "0.3em",
        duration: 1,
        ease: "ease-in"
      }).from(desRef.current, {
        xPercent: 30,
        autoAlpha: 0,
        letterSpacing: "0.3em",
        duration: 1,
        ease: "ease-in"
      });
    }
  }, []);

  return (
    <MeSectionBlock>
      <img src="/public/img/bg_1.png" alt="나" />
      <MeSectionText>
        <MeSectionTextTitle ref={titleRef}>
          <strong>
            “살아 있는 동안에 배워라.
            <br /> 늙음이 현명함을 가져다주리라 기대하지말라.”
          </strong>
        </MeSectionTextTitle>
        <MeSectionTextDes ref={desRef}>
          <p>
            연차가 쌓인다고 해서 자연히 실력이 늘지는 않을 것입니다.
            <br /> 그에 맞는 실력을 갖기 위해 끊임없이 배워야 합니다. <br />
            현재에 만족하고 멈춰선다면 뒤쳐지는 것은 당연한 일입니다.
            <br /> 그래서 저는 <strong>“꾸준히 배우는”</strong> 개발자를 목표로
            합니다.
          </p>
        </MeSectionTextDes>
      </MeSectionText>
    </MeSectionBlock>
  );
};

export default MeSection;
