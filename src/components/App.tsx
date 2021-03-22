import React, { ReactElement, useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Work from "./Work";
import Footer from "./Footer";
import Intro from "./Intro";
import Me from "./Me";

gsap.registerPlugin(ScrollTrigger);

const Test = styled.div`
  height: 100vh;
`;
const Header = styled.header`
  font-size: 6.4rem;
  letter-spacing: 0.06em;
  text-align: center;
  padding-top: 5rem;
`;
const AppBlock = styled.div``;

const App = (): ReactElement => {
  return (
    <AppBlock>
      <Header>code-bebop</Header>
      <Intro />
      <Me />
      <Work />
      <Footer />
      <Test></Test>
    </AppBlock>
  );
};

export default App;
