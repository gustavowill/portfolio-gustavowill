import styled, { createGlobalStyle } from 'styled-components';

const ModalWrapper = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: 100;
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(15px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export default ModalWrapper;
