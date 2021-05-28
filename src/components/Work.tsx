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
    padding: 10.416vw 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    header,
    footer {
      font-size: 1.25vw;
    }
    h1 {
      font-size: 3.333vw;
      margin-bottom: 7.552vw;
    }
    nav {
      display: flex;
      flex-direction: column;
      margin-top: 8.25vw;
      a {
        color: #ffe53d;
        font-size: 1.25vw;
        font-weight: bold;
        display: inline-block;
        &:first-child {
          margin-bottom: 20px;
        }
      }
    }
  }
  & > a {
    flex: 1;
    width: 50%;
    height: 100%;
    object-fit: cover;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
const WorkBlock = styled.div`
  margin-top: 200px;
`;

const Work = (): ReactElement => {
  const workImgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (workImgRef.current) {
      const workImgs = gsap.utils.toArray<HTMLImageElement>(".workImg");
      ScrollTrigger.config({ limitCallbacks: true });
      ScrollTrigger.refresh();
      ScrollTrigger.saveStyles(workImgs);
      window.addEventListener("load", () => {
        ScrollTrigger.matchMedia({
          "(min-width:800px": () => {
            workImgs.forEach(workImg => {
              gsap.from(workImg, {
                scale: "1.2",
                duration: 1,
                scrollTrigger: {
                  id: "workImg",
                  trigger: workImg,
                  start: "top bottom",
                  end: "top center",
                  refreshPriority: 1
                }
              });
            });
          }
        });
      });
    }
  }, []);
  return (
    <WorkBlock>
      <WorkItem bgColor="A57052">
        <section>
          <header>React</header>
          <div>
            <h1>
              <a
                href="https://github.com/code-bebop/Book-Search-App"
                rel="noopener noreferrer"
                target="_blank"
              >
                책 검색 / 추천 게시판
              </a>
            </h1>
            <footer>Web Site</footer>
            <nav>
              <a
                href="https://code-bebop.github.io/Book-Search-App"
                rel="noopener noreferrer"
                target="_blank"
              >
                DEMO SITE
              </a>
              <a
                href="https://github.com/code-bebop/Book-Search-App"
                rel="noopener noreferrer"
                target="_blank"
              >
                PROJECT
              </a>
            </nav>
          </div>
        </section>
        <a
          href="https://github.com/code-bebop/Book-Search-App"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="./public/img/work_1.png"
            alt="Work_1"
            className="workImg"
            ref={workImgRef}
          />
        </a>
      </WorkItem>
      <WorkItem bgColor="383736">
        <section>
          <header>React</header>
          <div>
            <h1>
              <a
                href="https://github.com/code-bebop/MyTFT"
                rel="noopener noreferrer"
                target="_blank"
              >
                TFT 전적 검색 / 분석
              </a>
            </h1>
            <footer>Web Site</footer>
            <nav>
              <a
                href="https://code-bebop.github.io/MyTFT"
                rel="noopener noreferrer"
                target="_blank"
              >
                DEMO SITE
              </a>
              <a
                href="https://github.com/code-bebop/MyTFT"
                rel="noopener noreferrer"
                target="_blank"
              >
                PROJECT
              </a>
            </nav>
          </div>
        </section>
        <a
          href="https://github.com/code-bebop/MyTFT"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src="./public/img/work_2.png" alt="Work_2" className="workImg" />
        </a>
      </WorkItem>
      <WorkItem bgColor="22586F">
        <section>
          <header>HTML, CSS, JS</header>
          <div>
            <h1>
              <a
                href="https://github.com/code-bebop/Converse"
                rel="noopener noreferrer"
                target="_blank"
              >
                캔버스 홈페이지 <br /> 클론 코딩
              </a>
            </h1>
            <footer>Web Site</footer>
            <nav>
              <a
                href="http://codebebop.dothome.co.kr/converse"
                rel="noopener noreferrer"
                target="_blank"
              >
                DEMO SITE
              </a>
              <a
                href="https://github.com/code-bebop/Converse"
                rel="noopener noreferrer"
                target="_blank"
              >
                PROJECT
              </a>
            </nav>
          </div>
        </section>
        <a
          href="https://github.com/code-bebop/Converse"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src="./public/img/work_3.png" alt="Work_3" className="workImg" />
        </a>
      </WorkItem>
      <WorkItem bgColor="A57052">
        <section>
          <header>HTML, CSS, JS</header>
          <div>
            <h1>
              <a
                href="https://github.com/code-bebop/Converse"
                rel="noopener noreferrer"
                target="_blank"
              >
                아이러너 홈페이지 <br /> 클론 코딩
              </a>
            </h1>
            <footer>Web Site</footer>
            <nav>
              <a
                href="http://codebebop.dothome.co.kr/I_runner/"
                rel="noopener noreferrer"
                target="_blank"
              >
                DEMO SITE
              </a>
              <a
                href="http://codebebop.dothome.co.kr/I_runner/"
                rel="noopener noreferrer"
                target="_blank"
              >
                PROJECT
              </a>
            </nav>
          </div>
        </section>
        <a
          href="http://codebebop.dothome.co.kr/I_runner/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src="./public/img/work_4.png" alt="Work_4" className="workImg" />
        </a>
      </WorkItem>
    </WorkBlock>
  );
};

export default Work;
