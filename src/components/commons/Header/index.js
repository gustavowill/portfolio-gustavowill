import React from 'react';
import HeaderBar from './styles';
import Logo from '../Logo';
import Text from '../../foundation/Text';

const links = [
  {
    text: 'Sobre',
    url: '/about',
  },
  {
    text: 'Contato',
    url: '/contact',
  },
];

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
