import styled from 'styled-components';
import theme from '../../../theme';

const BannerWrapper = styled.section`
      position: absolute;
      top: 0vh;
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-wrap: nowrap;
      backdrop-filter: blur(15px);
      background: linear-gradient(10deg, ${theme.colors.secondary} 5%, transparent 40%), linear-gradient(180deg, #222 0%, transparent 80%);
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
