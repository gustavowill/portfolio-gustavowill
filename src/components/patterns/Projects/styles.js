/* eslint-disable indent */
import styled from 'styled-components';
import getThemeColor from '../../../theme/utils/getThemeColor';

const ProjectsWrapper = styled.section`
  padding-top: 0.83em;
  text-align: center;
`;

ProjectsWrapper.List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
`;

ProjectsWrapper.Card = styled.div`
    padding: 1%;
    transition: 500ms;
    border: 2px dashed ${getThemeColor('primary')};
    border-right-style: solid;
    border-bottom-style: solid;
  margin: 0 auto 2rem auto;

  :hover, :focus {
    box-shadow: 5px 5px ${getThemeColor('primary')};
    border-style: solid;
  }
 `;

export default ProjectsWrapper;
