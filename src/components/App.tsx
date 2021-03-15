import React, { ReactElement, useEffect, useRef } from "react";
import { gsap } from "gsap";

import Header from "./Header";
import MainSection from "./MainSection";
import MeSection from "./MeSection";
import WorkSection from "./WorkSection";
import styled from "styled-components";

const HorizonalSections = styled.div`
  display: flex;
  width: 200vw;
  transform: translateX(100vw);
`;

const App = (): ReactElement => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current !== null) {
      const sectionWidth = sectionRef.current?.offsetWidth;
      console.log(sectionWidth);

      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          markers: true,
          scrub: true,
          pin: true,
          start: "top top",
          end: () => `+=${sectionWidth - 50}`
        },
        x: "-100vw"
      });
    }
  }, []);

  return (
    <>
      <Header />
      <MainSection />
      <HorizonalSections ref={sectionRef}>
        <MeSection />
        <WorkSection />
      </HorizonalSections>
    </>
  );
};

export default App;
