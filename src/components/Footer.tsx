import React, { ReactElement } from "react";
import styled from "styled-components";

const FooterTopLeft = styled.div`
  display: flex;
  & > div {
    width: 50%;
    height: 100%;
  }
`;
const FooterTop = styled.div`
  height: 100%;
  display: flex;
  & > div {
    width: 50%;
    height: 100%;
  }
`;
const FooterBlock = styled.footer`
  height: 45rem;
  margin-top: 25rem;
  border-top: 1px solid #fff;
`;

const Footer = (): ReactElement => {
  return (
    <FooterBlock>
      <FooterTop>
        <FooterTopLeft>
          <div>1-1</div>
          <div>1-2</div>
        </FooterTopLeft>
        <div>2</div>
      </FooterTop>
    </FooterBlock>
  );
};

export default Footer;
