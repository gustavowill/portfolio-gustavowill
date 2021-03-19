/* eslint-disable indent */
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import getThemeColor from '../../../theme/utils/getThemeColor';

const headerBreakpoints = {
  sm: css`
    max-width: 576px;
  `,
  md: css`
    max-width: 768px;
    justify-content: space-between;
  `,
  lg: css`
    max-width: 1160px;
  `,
  xl: css`
    max-width: 1222px;
  `,
};

const HeaderBar = styled.div`
  background-color: ${getThemeColor('secondary')};
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
`;

HeaderBar.Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  ${breakpointsMedia(headerBreakpoints)}
`;

HeaderBar.Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 90%;
  padding: 0 5%;
  ${breakpointsMedia({
    xs: { flexBasis: '100%', paddingBottom: '1vh' },
    md: { flexBasis: '90%', justifyContent: 'flex-end', paddingBottom: '0vh' },
  })}
  button {
    cursor: pointer;
  }
`;

export default HeaderBar;
