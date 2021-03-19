/* eslint-disable indent */
import styled from 'styled-components';
import theme from '../../../theme';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const cardEmphasisImageBreakpointsStyles = {
  xs: {
    width: '100%',
  },
  md: {
    paddingRight: '15px',
    width: '50%',
  },
};

const cardEmphasisTextDivBreakpointsStyles = {
  xs: {
    width: '100%',
  },
  md: {
    width: '50%',
  },
};

const cardSharedStyle = {
  marginBottom: '32px',
  padding: '1%',
  transition: '500ms',
  border: `2px ${theme.colors.primary} dashed`,
  borderRightStyle: 'solid',
  borderBottomStyle: 'solid',
};

const cardHoverEffect = {
  // eslint-disable-next-line quotes
  boxShadow: `5px 5px ${theme.colors.primary}`,
  borderStyle: 'solid',
};

const ProjectsWrapper = styled.section`
  padding-top: 0.83em;
  text-align: center;
`;

ProjectsWrapper.Card = styled.div`
  ${cardSharedStyle}
  img {
    width: 100%;
  }
  :hover, :focus {
    ${cardHoverEffect}
  }
 `;

ProjectsWrapper.CardEmphasis = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  ${cardSharedStyle}
  img {
    ${breakpointsMedia(cardEmphasisImageBreakpointsStyles)}
  }
  div {
    ${breakpointsMedia(cardEmphasisTextDivBreakpointsStyles)}
  }
  :hover, :focus {
    ${cardHoverEffect}
  }
`;

export default ProjectsWrapper;
