import styled from 'styled-components';
import getThemeColor from '../../theme/utils/getThemeColor';

const ProjectWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

ProjectWrapper.Image = styled.img`
  margin: 0 auto;
  width: 800px;
  max-width: 100%;
  border: 2px solid ${getThemeColor('primary')};
`;

export default ProjectWrapper;
