import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import Text from '../../foundation/Text';

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

const Hearderwrapper = styled.nav`
  display: flex;
  justify-content: space-evenly;
  border-top: green solid 2px;
  background-color: lightgreen;
`;

Hearderwrapper.NavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 40%;
  a {
    color: green;
    text-decoration: none;
    margin: 0 5%;
  }
`;

export default function Header() {
  return (
    <Hearderwrapper>
      <Logo />
      <Hearderwrapper.NavBar>
        {links.map((link) => (
          <Text key={link.text} variant="navLinkText" tag="a" href={link.url}>
            {link.text}
          </Text>
        ))}
      </Hearderwrapper.NavBar>
    </Hearderwrapper>
  );
}
