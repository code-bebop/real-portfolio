import React, { ReactElement } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HighLightSpan = styled.span`
  background-color: violet;
  color: #1b350a;
  padding: 0.5rem;
`;
const MeBlock = styled.div`
  margin-top: 15rem;
  text-align: center;
  & > img {
    width: 55rem;
    height: 56rem;
    object-fit: cover;
    margin-bottom: 12rem;
  }
  & > p {
    font-size: 3.333vw;
    font-weight: bold;
  }
`;

const Me = (): ReactElement => {
  return (
    <MeBlock>
      <img src="/public/img/bg_1.png" alt="Me" />
      <p>
        &quot;살아있는 동안에 배워라, <br />
        늙음이 현명함을 가져다 주리라 기대하지 말라.&quot;
        <br />
        <br />
        연차가 쌓인다고 해서 자연히 실력이 늘 것이라
        <br />
        생각하지 않습니다. 자신의 실력에 안주하지 않고
        <br />
        <HighLightSpan>꾸준히 배우는</HighLightSpan>개발자 로 남는 것이
        목표입니다.
      </p>
    </MeBlock>
  );
};

export default Me;
