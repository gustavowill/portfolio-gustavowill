import styled from 'styled-components';
import theme from '../../../theme';

const FooterWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.secondary};
  border-bottom: ${theme.colors.primary} solid 0.4vh;
`;

FooterWrapper.LinksBar = styled.div`
  background-color: ${theme.colors.primary};
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
