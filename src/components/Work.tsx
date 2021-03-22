import React, { ReactElement, useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WorkItem = styled.div<{ bgColor: string }>`
  background-color: ${props => `#${props.bgColor}`};
  height: 50.468vw;
  display: flex;
  overflow: hidden;
  & > section {
    flex: 1;
    text-align: center;
    padding: 20rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    header,
    footer {
      font-size: 1.25vw;
    }
    h1 {
      font-size: 3.333vw;
      margin-bottom: 14.5rem;
    }
  }
  & > img {
    flex: 1;
    width: 50%;
    height: 100%;
    object-fit: cover;
  }
`;
const WorkBlock = styled.div`
  margin-top: 200px;
`;

const Work = (): ReactElement => {
  const workRef = useRef<HTMLDivElement>(null);
  const workImgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (workRef.current && workImgRef.current) {
      ScrollTrigger.config({ limitCallbacks: true });
      ScrollTrigger.refresh();
      window.addEventListener("load", () => {
        const workImgs = gsap.utils.toArray<HTMLImageElement>(".workImg");

        workImgs.forEach(workImg => {
          gsap.from(workImg, {
            width: "51%",
            scale: "1.2",
            duration: 1,
            scrollTrigger: {
              id: "workImg",
              markers: true,
              trigger: workImg,
              start: "top bottom",
              end: "top center",
              refreshPriority: 1
            }
          });
        });
      });
    }
  }, []);
  return (
    <WorkBlock ref={workRef}>
      <WorkItem bgColor="A57052">
        <section>
          <header>React</header>
          <div>
            <h1>책 검색 / 추천 게시판</h1>
            <footer>Web Site</footer>
          </div>
        </section>
        <img
          src="/public/img/bg_2.png"
          alt="Work_1"
          className="workImg"
          ref={workImgRef}
        />
      </WorkItem>
      <WorkItem bgColor="383736">
        <section>
          <header>React</header>
          <div>
            <h1>TFT 전적 검색 / 분석</h1>
            <footer>Web Site</footer>
          </div>
        </section>
        <img src="/public/img/bg_2.png" alt="Work_1" className="workImg" />
      </WorkItem>
      <WorkItem bgColor="22586F">
        <section>
          <header>HTML, CSS, JS</header>
          <div>
            <h1>
              아이러너 홈페이지 <br /> 클론 코딩
            </h1>
            <footer>Web Site</footer>
          </div>
        </section>
        <img src="/public/img/bg_2.png" alt="Work_1" className="workImg" />
      </WorkItem>
    </WorkBlock>
  );
};

export default Work;
