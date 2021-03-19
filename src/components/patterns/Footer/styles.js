import styled from 'styled-components';
import getThemeColor from '../../../theme/utils/getThemeColor';

const FooterWrapper = styled.section`
  vertical-align: bottom;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${getThemeColor('secondary')};
  border-bottom: 0.4vh solid ${getThemeColor('primary')};
`;

FooterWrapper.LinksBar = styled.div`
  background-color: ${getThemeColor('primary')};
  display: flex;
  justify-content: space-between;
  height: 50px;
  width: 132px;
  margin-bottom: -0.4vh;
`;

FooterWrapper.Icon = styled.a`
  margin: auto 16px;
`;

export default FooterWrapper;
