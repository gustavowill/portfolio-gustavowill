import styled, { css } from 'styled-components';
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
  height: 6vh;
  border-top: green solid 2px;
  background-color: #333
`;

HeaderBar.Wrapper = styled.div`
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
    color: green;
    text-decoration: none;
    margin-left: 5%;
    :hover, :focus {
      color: #CCFFCC;
    }
  }
`;

export default HeaderBar;
