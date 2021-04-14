import styled, { css } from 'styled-components';
import getThemeColor from '../../../theme/utils/getThemeColor';

const BannerWrapper = styled.section`
    ${({ bannerVisible }) => {
    if (bannerVisible) {
      return css`
        top: 0;
      `;
    }
    return css`
      top: -105%;
    `;
  }}

  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
  backdrop-filter: blur(15px);
  background: linear-gradient(010deg, ${getThemeColor('secondary')} 5%, transparent 40%),
              linear-gradient(180deg, ${getThemeColor('secondary')} 0%, transparent 80%);
  box-shadow: 0 10px 20px 5px black;
  z-index: 2;
  transition: 400ms;
  cursor: pointer; 
  div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  svg {
    vertical-align: top;
    margin: 0 1em;
  }
`;

BannerWrapper.UpArrow = styled.div`
  position: fixed;
  bottom: 5rem;
  left: 47.5vw;
  width: 5vw;
  height: 5vw;
  border: solid ${getThemeColor('primary')};
  border-width: 0.5rem 0.5rem 0 0;
  transform: rotate(-45deg);
`;

export default BannerWrapper;
