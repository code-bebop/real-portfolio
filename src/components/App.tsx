import React, {
  ReactElement,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "./Header";
import MainSection from "./MainSection";
import MeSection from "./MeSection";
import styled from "styled-components";
import WorkSectionBlock from "./WorkSection";

gsap.registerPlugin(ScrollTrigger);
const HorizontalSections = styled.div`
  display: inline-flex;
`;

const App = (): ReactElement => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const myTween = useRef<gsap.core.Tween>();
  const [documentWidth, setDocumentWidth] = useState<number>(0);

  useLayoutEffect(() => {
    const updateDocWidth = () => {
      setDocumentWidth(document.documentElement.clientWidth);
    };
    updateDocWidth();
    window.addEventListener("resize", updateDocWidth);
  }, []);

  useEffect(() => {
    if (sectionRef.current !== null) {
      if (myTween.current) {
        ScrollTrigger.refresh();
        myTween.current.kill();
        ScrollTrigger.getById("horizontalTrigger").kill(true);
      }
      const sectionWidth = sectionRef.current.offsetWidth;
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionRectWidth = sectionRect.width;

      console.log(sectionRectWidth);
      console.log(sectionWidth);

      myTween.current = gsap.fromTo(
        sectionRef.current,
        {
          x: () => `${document.documentElement.clientWidth}`
        },
        {
          scrollTrigger: {
            id: "horizontalTrigger",
            trigger: sectionRef.current,
            markers: true,
            scrub: true,
            pin: true,
            start: "top top",
            end: () => `+=${sectionRectWidth}`
          },
          ease: "none",
          x: () => `-${sectionRectWidth - document.documentElement.clientWidth}`
        }
      );
    }
  }, [documentWidth]);

  return (
    <>
      <Header />
      <MainSection />
      <HorizontalSections ref={sectionRef}>
        <MeSection />
        <WorkSectionBlock />
      </HorizontalSections>
    </>
  );
};

export default App;
