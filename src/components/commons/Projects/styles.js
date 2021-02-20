import styled from 'styled-components';
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

const cardHoverEffect = {
  boxShadow: '5px 5px green',
  borderStyle: 'solid',
};

const ProjectsWrapper = styled.section`
  text-align: center;
  background-color: #BBB;
`;

ProjectsWrapper.Card = styled.div`
margin-bottom: 32px;
  padding: 1%;
  border: 2px green dashed;
  border-right-style: solid;
  border-bottom-style: solid;
  transition: 500ms;
  img {
    width: 100%;
  }
  :hover, :focus {
    ${cardHoverEffect}
  }
 `;

ProjectsWrapper.CardEmphasis = styled.div`
  margin-bottom: 32px;
  padding: 1%;
  border: green solid 2px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  transition: 500ms;
  border: 2px green dashed;
  border-right-style: solid;
  border-bottom-style: solid;
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
