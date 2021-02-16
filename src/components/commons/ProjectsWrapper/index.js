import styled from 'styled-components';

const ProjectWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  h2 {
    flex-basis: 100%;
  };
`;

ProjectWrapper.Card = styled.div`
  padding: 1%;
  border: green solid 2px;
  margin: 0 1%;
`;

ProjectWrapper.CardEmphasis = styled.div`
  padding: 1%;
  border: green solid 2px;
  display: flex;
  align-items: center;
  img{
    margin-right: 2%;
  }
`;

ProjectWrapper.CardImage = styled.img`
`;

export default ProjectWrapper;
