/* eslint-disable indent */
import styled from 'styled-components';
import getThemeColor from '../../theme/utils/getThemeColor';

const AboutWrapper = styled.section`
  
`;

AboutWrapper.Image = styled.img`
  display: block;
  margin: 2rem auto 5rem auto;
  max-width: 80%;
  border: 3px solid ${getThemeColor('primary')}
`;

AboutWrapper.RepositoryCard = styled.div`
  max-width: 100%;
  margin-bottom: 2rem;

  h3 {
    margin-bottom: 0;
    word-break: break-all;
  }

  a {
    max-width: 80%;
    word-break: break-all;
  }
`;

export default AboutWrapper;
