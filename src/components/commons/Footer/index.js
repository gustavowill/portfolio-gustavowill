import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgreen;
  border-bottom: green solid 0.4vh;
`;

FooterWrapper.Icon = styled.a`
  margin: 0 0.1vh;
  background-color: green;
  img {
  vertical-align: middle;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterWrapper.Icon href="https://github.com/gustavowill"><img src="https://placehold.it/80x80" alt="icon2" /></FooterWrapper.Icon>
      <FooterWrapper.Icon href="https://twitter.com/"><img src="https://placehold.it/80x80" alt="icon1" /></FooterWrapper.Icon>
    </FooterWrapper>
  );
}
