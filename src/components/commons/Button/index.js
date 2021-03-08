import PropTypes from 'prop-types';
import React from 'react';
import ButtonWrapper from './styles';

export default function Button({
  children,
  variant,
  onClick,
  isDisabled,
}) {
  return (
    <ButtonWrapper
      onClick={onClick}
      variant={variant}
      disabled={isDisabled}
    >
      {children}
    </ButtonWrapper>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'default',
  isDisabled: false,
};
