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
  & > div {
    margin-bottom: 20rem;
    position: relative;
    & > img {
      object-fit: cover;
      margin-bottom: 5rem;
    }
    & > dl {
      & > dt {
        font-size: 3.6rem;
      }
      & > dd {
        margin: 0;
        font-size: 2.4rem;
        margin-top: 0.8rem;
      }
    }
    &::before {
      display: block;
      content: "";
      width: 70%;
      height: 5px;
      background-color: #fff;
      position: absolute;
      bottom: -10rem;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  & > p {
    font-size: 3.333vw;
    font-weight: bold;
    line-height: 1.7;
    ${({ theme }) => theme.mobile`
      font-size: 24px;
      line-height: 2.5;
    `}
  }
`;

const Me = (): ReactElement => {
  return (
    <MeBlock>
      <div>
        <img src="./public/img/me.png" alt="Me" />
        <dl>
          <dt>EXP</dt>
          <dd>2016.02 ~ 2018.02 일본어학과 졸업</dd>
          <dd>2018.03 ~ 2019.11 군 전역</dd>
          <dd>2020.01 ~ 2020.06 퍼블리셔 국비과정 수료</dd>
          <dd>2020.06 ~ 프론트엔드 독학</dd>
        </dl>
      </div>
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
