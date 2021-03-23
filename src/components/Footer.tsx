import React, { ReactElement, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

import { gsap } from "gsap";

const Note = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  & > span {
    font-size: 4.8rem;
  }
`;
const footerSite = keyframes`
  0% {
    
  }
  100% {
    transform: translateX(-100%);
  }
`;
const FooterSite = styled.nav`
  border: 1px solid #fff;
  border-right: none;
  border-left: none;
  display: flex;
  align-items: center;
  overflow: hidden;
  & > a {
    font-size: 13rem;
    font-family: "Roboto Mono", monospace;
    white-space: nowrap;
    padding: 0 30px;
    animation: ${footerSite} 15s infinite linear;
  }
`;
const SocialNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  & > a {
    border: 1px solid #fff;
    border-left: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4.8rem;
  }
`;
const FooterBlock = styled.footer`
  height: 45rem;
  margin-top: 25rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Footer = (): ReactElement => {
  const siteRef = useRef<HTMLAnchorElement>(null);

  return (
    <FooterBlock>
      <SocialNav>
        <a href="#">EMAIL</a>
        <a href="#">BLOG</a>
        <a href="#">GITHUB</a>
        <a href="#">뭐 넣지</a>
      </SocialNav>
      <FooterSite>
        <a href="#" className="footerSite">
          code-bebop.portfolio
        </a>
        <a href="#" className="footerSite">
          code-bebop.portfolio
        </a>
      </FooterSite>
      <Note>
        <span>&copy; 2021. code-bebop</span>
      </Note>
    </FooterBlock>
  );
};

export default Footer;
