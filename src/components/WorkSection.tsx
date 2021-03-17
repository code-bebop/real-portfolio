import React, { ReactElement, useRef } from "react";
import styled from "styled-components";
import Section from "./common/Section";

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

const WorkSection = (): ReactElement => {
  const WorkImgRef = useRef<HTMLImageElement>(null);

  return (
    <WorkSectionBlock>
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
