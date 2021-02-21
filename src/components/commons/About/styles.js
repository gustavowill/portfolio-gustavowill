import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import theme from '../../../theme';

const AboutWrapper = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 32px 16px;
  color: ${theme.colors.primary};
  ${breakpointsMedia({
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
  })}
`;

AboutWrapper.LeftSide = styled.div`
  flex: 0 0 50%;
`;

AboutWrapper.RightSide = styled.div`
  flex: 0 0 50%;
`;

AboutWrapper.Image = styled.img`

`;

export default AboutWrapper;
