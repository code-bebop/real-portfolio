import React, { ReactElement, useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section = styled.div`
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  transform: translateX(100%);
  display: flex;
  justify-content: center;
  align-items: center;
  & > p {
    font-size: 100px;
    font-weight: bold;
  }
`;
const MeSection = styled(Section)`
  padding: 63px 0;
  box-sizing: border-box;
  & > img {
    width: 25%;
    height: 50%;
    object-fit: cover;
    margin: 0 auto;
  }
  & > div {
    width: 50%;
    height: 100%;
    padding: 280px 0;
    box-sizing: border-box;
    & > strong {
      margin-bottom: 80px;
      display: inline-block;
      font-size: 36px;
      margin-left: 65px;
    }
    & > p {
      line-height: 200%;
      display: inline-block;
      font-size: 24px;
      margin-left: 155px;
    }
  }
`;

const Me = (): ReactElement => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log(sectionRef.current);
    if (sectionRef.current !== null) {
      gsap.to(sectionRef.current, {
        xPercent: -100,
        duration: 2,
        scrollTrigger: {
          trigger: sectionRef.current,
          markers: true,
          scrub: true,
          pin: true,
          start: "top top",
          end: () => "+=" + sectionRef.current?.offsetWidth
        }
      });
    }
  }, []);

  return (
    <MeSection ref={sectionRef}>
      <img src="/public/img/bg_1.png" alt="나" />
      <div>
        <strong>
          “살아 있는 동안에 배워라.
          <br /> 늙음이 현명함을 가져다주리라 기대하지말라.”
        </strong>
        <p>
          특히 개발자로써는 항상 명심해야 할 격언이라고 생각합니다.
          <br /> 기술은 끊임없이 발전하고 변화하기 마련입니다. <br /> 현재에
          만족하고 멈춰선다면 뒤쳐지는 것은 당연한 일입니다.
          <br /> 그래서 저는 <strong>“꾸준히 배우는”</strong> 개발자이고
          싶습니다.
        </p>
      </div>
    </MeSection>
  );
};

export default Me;
