import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import propToStyle from '../../../theme/utils/propToStyle';
import getTypographyVariant from '../../../theme/utils/getTypographyVariant';

const TextBase = styled.span`
  ${propToStyle('textAlign')}
  ${propToStyle('display')}
  
  ${getTypographyVariant()};
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
  variant: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
};

Text.defaultProps = {
  tag: 'span',
};
