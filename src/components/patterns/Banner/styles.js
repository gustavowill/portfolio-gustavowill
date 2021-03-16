import styled, { css } from 'styled-components';
import getThemeColor from '../../../theme/utils/getThemeColor';

const BannerWrapper = styled.section`
    ${({ bannerVisible }) => {
    if (bannerVisible) {
      return css`
        top: 0vh;
      `;
    }
    return css`
      top: -105vh;
    `;
  }}

  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
  backdrop-filter: blur(15px);
  background: linear-gradient(010deg, ${getThemeColor('secondary')} 5%, transparent 40%),
              linear-gradient(180deg, ${getThemeColor('secondary')} 0%, transparent 80%);
  box-shadow: 0 10px 20px 5px black;
  z-index: 2;
  transition: 1000ms;
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

export default BannerWrapper;
