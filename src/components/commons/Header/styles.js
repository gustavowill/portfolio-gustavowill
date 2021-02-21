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
  background-color: ${theme.colors.secondary};
  position: fixed;
  top: 0;
  width: 100%;
  padding: 2vh 0;
`;

HeaderBar.Wrapper = styled.div`
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
