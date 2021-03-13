import React, { ReactElement } from "react";

import Header from "./Header";
import MainSection from "./MainSection";
import Me from "./Me";

const App = (): ReactElement => {
  return (
    <>
      <Header />
      <MainSection />
      <Me />
    </>
  );
};

export default App;
