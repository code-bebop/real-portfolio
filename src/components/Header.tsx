import React, { ReactElement } from "react";
import styled from "styled-components";

const HeaderBlock = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 83px;
  z-index: 1;
  background-color: transparent;
  nav {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 83px;
    box-sizing: border-box;
    span {
      font-size: 28px;
      font-weight: bold;
    }
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      & > li {
        list-style-type: none;
        margin: 0 25px;
        font-size: 22px;
      }
    }
  }
`;

const Header = (): ReactElement => {
  return (
    <HeaderBlock>
      <nav>
        <span>code-bebop</span>
        <ul>
          <li>me</li>
          <li>
            <a href="#WorkSection">work</a>
          </li>
          <li>contact</li>
        </ul>
      </nav>
    </HeaderBlock>
  );
};

export default Header;
