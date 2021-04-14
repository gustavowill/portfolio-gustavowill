import PropTypes from 'prop-types';
import React from 'react';
import HeaderBar from './styles';
import Logo from '../../commons/Logo';
import Text from '../../foundation/Text';
import Button from '../../commons/Button';
import Link from '../../commons/Link';

const pages = [
  {
    text: 'Projetos',
    link: '/',
  },
  {
    text: 'Sobre',
    link: '/about',
  },
  // {
  //   text: 'Contato',
  // },
];

export default function Header({ openFormModal }) {
  return (
    <HeaderBar>
      <HeaderBar.Content>
        <Logo />
        <HeaderBar.Nav>
          {pages.map((page) => (
            <Button
              type="button"
              key={page.text}
              variant="navBar"
            >
              <Link
                tag="a"
                variant={{ xs: 'navLinkTextXs', sm: 'navLinkText' }}
                href={page.link}
              >
                {page.text}
              </Link>
            </Button>
          ))}
          <Button
            onClick={openFormModal}
            type="button"
            variant="navBar"
            name="contact"
          >
            <Text variant={{ xs: 'navLinkTextXs', sm: 'navLinkText' }}>
              Contato
            </Text>
          </Button>
        </HeaderBar.Nav>
      </HeaderBar.Content>
    </HeaderBar>
  );
}

Header.propTypes = {
  openFormModal: PropTypes.func.isRequired,
};
