import React, { ReactElement } from "react";
import styled from "styled-components";

const ContentBlock = styled.header`
  background-color: #777;
  width: 100%;
  height: 100%;
  & > p {
    margin: 0;
    padding: 0;
  }
`;
const AppBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  padding: 63px 83px;
  box-sizing: border-box;
`;
const HeaderBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 83px;
  z-index: 1;
  background-color: #fff;
  nav {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 83px;
    box-sizing: border-box;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      margin: 0;
      padding: 0;
      & > li {
        list-style-type: none;
        padding: 0;
        margin: 0 10px;
      }
    }
  }
`;
const App = (): ReactElement => {
  return (
    <>
      <HeaderBlock>
        <nav>
          <span>code-bebop</span>
          <ul>
            <li>me</li>
            <li>work</li>
            <li>contact</li>
          </ul>
        </nav>
      </HeaderBlock>
      <AppBlock>
        <ContentBlock>
          <p>핫로드 적용 됨?</p>
        </ContentBlock>
      </AppBlock>
    </>
  );
};

export default App;
