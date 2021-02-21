import styled from 'styled-components';
import theme from '../../../theme';

const BannerWrapper = styled.section`
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 0 0 92vh;
      flex-wrap: nowrap;
      background: linear-gradient(10deg, ${theme.colors.secondary} 5%, transparent 35%), linear-gradient(180deg, #222 0%, transparent 75%);
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
