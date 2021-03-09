import PropTypes from 'prop-types';
import React from 'react';
import HeaderBar from './styles';
import Logo from '../../commons/Logo';
import Text from '../../foundation/Text';
import Button from '../../commons/Button';

const pageSections = [
  {
    text: 'Projetos',
  },
  {
    text: 'Sobre',
  },
  // {
  //   text: 'Contato',
  // },
];

export default function Header({ openFormModal }) {
  return (
    <HeaderBar>
      <HeaderBar.Wrapper>
        <Logo />
        <HeaderBar.Nav>
          {pageSections.map((section) => (
            <Button
              onClick={() => undefined}
              type="button"
              key={section.text}
              variant="navBar"
            >
              <Text variant="navLinkText">
                {section.text}
              </Text>
            </Button>
          ))}
          <Button
            onClick={openFormModal}
            type="button"
            variant="navBar"
          >
            <Text variant="navLinkText">
              Contato
            </Text>
          </Button>
        </HeaderBar.Nav>
      </HeaderBar.Wrapper>
    </HeaderBar>
  );
}

Header.propTypes = {
  openFormModal: PropTypes.func.isRequired,
};
