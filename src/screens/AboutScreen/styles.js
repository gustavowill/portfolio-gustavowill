/* eslint-disable indent */
import styled, { css } from 'styled-components';
import theme from '../../theme';
import breakpointsMedia from '../../theme/utils/breakpointsMedia';
import getThemeColor from '../../theme/utils/getThemeColor';

const AboutWrapper = styled.section`
  margin: 0 auto;
  padding: 32px 16px;
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
  p, a {
    ${breakpointsMedia({
      xs: theme.typographyVariants.cardTextSx,
      md: theme.typographyVariants.cardText,
    })}
  }
  h2 {
    ${breakpointsMedia({
      xs: theme.typographyVariants.projectTitleSx,
      md: theme.typographyVariants.projectTitle,
    })}
  }
  h3 {
    ${breakpointsMedia({
      xs: theme.typographyVariants.cardTitleSx,
      md: theme.typographyVariants.cardTitle,
    })}
  }
  p {
    max-width: 80%;
    margin-right: auto;
    margin-left: auto;
  }
  a {
    max-width: 100%;
  }
`;

// AboutWrapper.LeftSide = styled.div`
//   ${breakpointsMedia({
//     xs: { flex: '0 0 100%', padding: '0 16px' },
//     md: 'flex: 0 0 50%',
//   })}
// `;

// AboutWrapper.RightSide = styled.div`
//   ${breakpointsMedia({
//     xs: { flex: '0 0 100%', padding: '0 16px' },
//     md: 'flex: 0 0 50%',
//   })}
// `;

AboutWrapper.Image = styled.img`
  display: block;
  margin: 2rem auto 5rem auto;
  max-width: 80%;
  border: 3px solid ${getThemeColor('primary')}
`;

AboutWrapper.RepositoryCard = styled.div`
  width: 80vw;
  ${breakpointsMedia({
    xs: {
      margin: '0 auto',
      overflow: 'scroll',
    },
    md: {
      margin: '0 0',
      overflow: 'initial',
    },
  })}
  h3 {
    margin-bottom: 0;
  }
`;

export default AboutWrapper;
