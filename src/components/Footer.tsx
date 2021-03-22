import React, { ReactElement } from "react";
import styled from "styled-components";

const Note = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  & > span {
    font-size: 4.8rem;
  }
`;
const FooterAni = styled.nav`
  border: 1px solid #fff;
  border-right: none;
`;
const SocialNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  & > a {
    border: 1px solid #fff;
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
  return (
    <FooterBlock>
      <SocialNav>
        <a href="#">EMAIL</a>
        <a href="#">BLOG</a>
        <a href="#">GITHUB</a>
        <a href="#">뭐 넣지</a>
      </SocialNav>
      <FooterAni>
        <span>몬가 반복되는 애니메이션</span>
      </FooterAni>
      <Note>
        <span>&copy; 2021. code-bebop</span>
      </Note>
    </FooterBlock>
  );
};

export default Footer;
