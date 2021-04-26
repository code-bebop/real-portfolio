import React, { ReactElement, useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IntroBlock = styled.div`
  margin-top: 6rem;
  overflow: hidden;
  text-align: center;
  p {
    font-size: 5.2vw;
    font-weight: bold;
    line-height: 1.7;
    white-space: nowrap;
  }
  img {
    width: 13.281vw;
    object-fit: cover;
    transform: translateY(25%);
  }
`;

const Intro = (): ReactElement => {
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("load", () => {
      if (introRef.current) {
        const introTexts = gsap.utils.toArray<HTMLParagraphElement>(
          introRef.current.children
        );
        const introTop = introRef.current.offsetTop;

        introTexts.forEach((introText, index) => {
          const pre = index % 2 ? -1 : 1;

          gsap.to(introText, {
            scrollTrigger: {
              id: "Intro",
              trigger: introRef.current!,
              scrub: 2,
              start: `-=${introTop}`
            },
            xPercent: (100 - index * 30) * pre
          });
        });
      }
    });
  }, []);

  return (
    <IntroBlock ref={introRef}>
      <p>
        프론트엔드 개발자{" "}
        <img src="./public/img/intro_3.gif" alt="푸른 도시와 바다" /> 풀스택을
        꿈꾸는
      </p>
      <p>
        <span>🍒</span> UI/UX에 관심이 많은 <span>🌠</span> 부산에 사는
      </p>
      <p>
        꾸준히 배우는 개발자를 <span>☕</span> 목표로 하는
      </p>
      <p>
        불꽃남자 임지웅입니다.{" "}
        <img src="./public/img/intro_6.gif" alt="핸드드립 커피" />{" "}
      </p>
    </IntroBlock>
  );
};

export default Intro;
