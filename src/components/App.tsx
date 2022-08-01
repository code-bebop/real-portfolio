import { ReactElement } from "react";
import styled, { ThemeProvider } from "styled-components";
import media from "../media";

import Work from "./Work";
import Footer from "./Footer";
import Intro from "./Intro";
import Me from "./Me";
import Work2 from "./Work2";

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
    <ThemeProvider theme={media}>
      <AppBlock>
        <Title>code-bebop</Title>
        <Intro />
        <Me />
        <Work2 />
        <Footer />
      </AppBlock>
    </ThemeProvider>
  );
};

export default App;
