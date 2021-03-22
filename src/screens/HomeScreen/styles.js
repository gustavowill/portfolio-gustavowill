/* eslint-disable indent */
import styled from 'styled-components';
import breakpointsMedia from '../../theme/utils/breakpointsMedia';
import getThemeColor from '../../theme/utils/getThemeColor';

const ProjectsWrapper = styled.section`
  padding-top: 0.83em;
  text-align: center;
`;

ProjectsWrapper.List = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin: 0;
`;

ProjectsWrapper.EmphasisCard = styled.div`
  padding: 1%;
  width: 100%;
  margin-bottom: 2rem;
  border: 2px solid ${getThemeColor('primary')};
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  img {
    ${breakpointsMedia({
      xs: {
        width: '100%',
      },
      md: {
        paddingRight: '15px',
        width: '50%',
      },
    })}
  }
  div {
    ${breakpointsMedia({
      xs: {
        width: '100%',
      },
      md: {
        width: '50%',
      },
    })}
  }
`;

ProjectsWrapper.Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1%;
  transition: 500ms;
  border: 2px dashed ${getThemeColor('primary')};
  border-right-style: solid;
  border-bottom-style: solid;
  margin: 0 auto 2rem auto;

  :hover, :focus {
    border-style: solid;
  }
 `;

 ProjectsWrapper.CardDescription = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  padding: 2rem;
  
  p {
    background-color: ${getThemeColor('tertiary')};
    border: 2px solid ${getThemeColor('primary')};
  }

  :hover {
    ${breakpointsMedia({
      md: {
        opacity: '1',
        background: 'rgba(0,0,0,0.2)',
        backdropFilter: 'blur(15px)',
      },
  })}
  }
 `;

export default ProjectsWrapper;
