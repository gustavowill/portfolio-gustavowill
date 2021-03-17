import styled, { css } from 'styled-components';

const ModalWrapper = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: 100;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1000ms;
  ${({ isModalOpen }) => {
    if (isModalOpen) {
      return css`
        backdrop-filter: blur(15px);
        opacity: 1
      `;
    }
    return css`
      backdrop-filter: blur(0px);
      pointer-events: none;
      opacity: 0
    `;
  }}
`;

export default ModalWrapper;
