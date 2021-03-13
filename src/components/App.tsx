import React, { ReactElement } from "react";

import Header from "./Header";
import MainSection from "./MainSection";
import MeSection from "./MeSection";

const App = (): ReactElement => {
  return (
    <>
      <Header />
      <MainSection />
      <MeSection />
    </>
  );
};

export default App;
