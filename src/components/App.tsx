import React, { ReactElement } from "react";
import styled from "styled-components";

import Work from "./Work";
import Footer from "./Footer";
import Intro from "./Intro";
import Me from "./Me";

const Title = styled.h1`
  font-size: 6.4rem;
  font-weight: normal;
  letter-spacing: 0.1em;
  text-align: center;
  padding-top: 5rem;
  margin: 0;
`;
const AppBlock = styled.div`
  min-width: 768px;
`;

const App = (): ReactElement => {
  return (
    <AppBlock>
      <Title>code-bebop</Title>
      <Intro />
      <Me />
      <Work />
      <Footer />
    </AppBlock>
  );
};

export default App;
