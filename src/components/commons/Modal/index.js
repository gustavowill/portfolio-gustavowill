import PropTypes from 'prop-types';
import React from 'react';
import ModalWrapper, { LockScroll } from './styles';

const modalId = 'ModalWrapper';

export default function Modal({ isModalOpen, onClose, children }) {
  if (isModalOpen) {
    return (
      <ModalWrapper
        id={modalId}
        onClick={(event) => {
          if (event.target.id === modalId) onClose();
        }}
      >
        {isModalOpen && <LockScroll />}
        {children}
      </ModalWrapper>
    );
  }
  return (
    <></>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
