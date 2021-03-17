/* eslint-disable indent */
import styled, { css } from 'styled-components';
import theme from '../../../theme';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

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
  background-color: ${theme.colors.secondary};
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
  span, a {
    ${breakpointsMedia({
      xs: theme.typographyVariants.navLinkTextSx,
      md: theme.typographyVariants.navLinkText,
    })}
  }
`;

export default HeaderBar;
