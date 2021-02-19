import React from 'react';
import styled, { css } from 'styled-components';
import Logo from '../Logo';
import Text from '../../foundation/Text';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const headerBreakpoints = {
  sm: css`
    max-width: 576px;
  `,
  md: css`
    max-width: 768px;
  `,
  lg: css`
    max-width: 1160px;
  `,
  xl: css`
    max-width: 1222px;
  `,
};

const links = [
  {
    text: 'Sobre mim',
    url: '/about',
  },
  {
    text: 'Contato',
    url: '/contact',
  },
];

const HeaderBar = styled.div`
  width: 100%;
  height: 6vh;
  border-top: green solid 2px;
  background-color: lightgreen;
`;

HeaderBar.Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  ${breakpointsMedia(headerBreakpoints)}
`;

HeaderBar.Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 40%;
  a {
    color: green;
    text-decoration: none;
    margin: 0 5%;
    :hover, :focus {
      color: #CCFFCC;
    }
  }
`;

export default function Header() {
  return (
    <HeaderBar>
      <HeaderBar.Wrapper>
        <Logo />
        <HeaderBar.Nav>
          {links.map((link) => (
            <Text key={link.text} variant="navLinkText" tag="a" href={link.url}>
              {link.text}
            </Text>
          ))}
        </HeaderBar.Nav>
      </HeaderBar.Wrapper>
    </HeaderBar>
  );
}
