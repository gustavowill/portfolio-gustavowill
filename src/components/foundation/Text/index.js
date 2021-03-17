import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import propToStyle from '../../../theme/utils/propToStyle';

const TextBase = styled.span`
  ${propToStyle('textAlign')}
  ${propToStyle('display')}
  ${({ theme, variant }) => theme.typographyVariants[variant]};
`;

export default function Text({
  tag, children, variant, ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string,
  variant: PropTypes.string.isRequired,
};

Text.defaultProps = {
  tag: 'span',
};
