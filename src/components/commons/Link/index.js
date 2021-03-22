/* eslint-disable jsx-a11y/anchor-is-valid */
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import StyledLink from './styles';

export default function Link({ children, href, variant }) {
  return (
    <>
      <NextLink
        href={href}
        passHref
      >
        <StyledLink
          variant={variant}
        >
          {children}
        </StyledLink>
      </NextLink>
    </>
  );
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  variant: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};

Link.defaultProps = {
  variant: undefined,
};
