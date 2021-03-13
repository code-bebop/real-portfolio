import React, { ReactElement } from "react";
import styled from "styled-components";

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
const ContentBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  overflow: hidden;
  & > p {
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
  return (
    <MainSectionBlock>
      <ContentBlock>
        <ContentVideo loop muted autoPlay src="/public/img/city.mp4" />
        <p>꾸준히 배우는 프론트엔드 개발자</p>
        <Velcro>
          <p>
            bebop은 Jazz 음악에서 부터 파생된 언어로, 빠른 템포에 강렬하고
            즉흥적인 연주 스타일을 뜻합니다.
            <br />
            code-bebop은 즉흥적이며 신나는 코딩을 지향하여 지은 닉네임입니다.
          </p>
        </Velcro>
      </ContentBlock>
    </MainSectionBlock>
  );
};

export default MainSection;
