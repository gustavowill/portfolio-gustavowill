import PropTypes from 'prop-types';
import React from 'react';
import LockScroll from '../LockScroll';
import ModalWrapper from './styles';

const modalId = 'ModalWrapper';

export default function Modal({ isModalOpen, onClose, children }) {
  return (
    <ModalWrapper
      id={modalId}
      isModalOpen={isModalOpen}
      onClick={(event) => {
        if (event.target.id === modalId) onClose();
      }}
    >
      {isModalOpen && <LockScroll />}
      {children}
    </ModalWrapper>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
