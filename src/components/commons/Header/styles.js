import styled, { css } from 'styled-components';
import theme from '../../../theme';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const headerBreakpoints = {
  sm: css`
    max-width: 576px;
  `,
  md: css`
    max-width: 768px;
  `,
  lg: css`
    max-width: 1160px;
  `,
  xl: css`
    max-width: 1222px;
  `,
};

const HeaderBar = styled.div`
  width: 100%;
  height: 8vh;
  background-color: ${theme.colors.secondary}
`;

HeaderBar.Wrapper = styled.div`
  padding-top: 2vh;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  ${breakpointsMedia(headerBreakpoints)}
`;

HeaderBar.Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-basis: 90%;
  padding-right: 5%;
  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    margin-left: 5%;
    :hover, :focus {
      color: ${theme.colors.linkHover};
    }
  }
`;

export default HeaderBar;
