import React, { ReactElement, useCallback } from "react";
import styled, { keyframes } from "styled-components";

const Note = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1 / 3;
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
    margin: 0;
    animation: ${footerSite} 15s infinite linear;
  }
`;
const SocialNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  & > a {
    border: 1px solid #fff;
    border-left: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4.8rem;
    position: relative;
    text-align: center;
    &:hover {
      background-color: #fff;
      color: #000;
    }
  }
`;
const FooterBlock = styled.footer`
  height: 45rem;
  margin-top: 25rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Footer = (): ReactElement => {
  const onFooterEnter = useCallback(
    (message: string) =>
      (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const target = e.target as HTMLAnchorElement;
        target.innerHTML = message;
        target.style.fontSize = "2.4rem";
      },
    []
  );
  const onFooterLeave = useCallback(
    (message: string) =>
      (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const target = e.target as HTMLAnchorElement;
        target.innerHTML = message;
        target.style.fontSize = "4.8rem";
      },
    []
  );

  return (
    <FooterBlock>
      <SocialNav>
        <a
          href="#"
          rel="noopener noreferrer"
          target="_blank"
          onMouseEnter={onFooterEnter("woonj2<br />@<br />gmail.com")}
          onMouseLeave={onFooterLeave("EMAIL")}
        >
          EMAIL
        </a>
        <a
          href="https://velog.io/@code-bebop"
          rel="noopener noreferrer"
          target="_blank"
        >
          BLOG
        </a>
        <a
          href="https://github.com/code-bebop"
          rel="noopener noreferrer"
          target="_blank"
        >
          GITHUB
        </a>
        <a
          href="#"
          onMouseEnter={onFooterEnter("010-5447-1036")}
          onMouseLeave={onFooterLeave("CONTACT")}
        >
          CONTACT
        </a>
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
