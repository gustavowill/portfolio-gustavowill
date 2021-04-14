import React from 'react';
import PropTypes from 'prop-types';
import InputWrapper from './styles';

export default function FormInput({
  tag,
  type,
  id,
  children,
  onChange,
  placeholder,
  value,
  name,
}) {
  return (
    <InputWrapper
      htmlFor={id}
    >
      {children}
      <InputWrapper.Field
        as={tag}
        type={type}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        name={name}
      />
    </InputWrapper>
  );
}

FormInput.propTypes = {
  tag: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

FormInput.defaultProps = {
  tag: 'input',
  type: 'text',
  id: undefined,
};
