import React from 'react';
import FooterWrapper from './styles';

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterWrapper.LinksBar>
        <FooterWrapper.Icon href="https://github.com/gustavowill"><img src="/images/icon/github.svg" alt="github icon" /></FooterWrapper.Icon>
        <FooterWrapper.Icon href="https://twitter.com/guswillemann"><img src="/images/icon/twitter.svg" alt="twitter icon" /></FooterWrapper.Icon>
      </FooterWrapper.LinksBar>
    </FooterWrapper>
  );
}
