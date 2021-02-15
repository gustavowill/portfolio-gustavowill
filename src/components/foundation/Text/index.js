import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import propToStyle from '../../../theme/utils/propToStyle';
import theme from '../../../theme';

const TextBase = styled.span`
  ${propToStyle('textAlign')}
  ${(props) => theme.typographyVariants[props.variant]};
`;

export default function Text({
  tag, children, variant, ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
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
