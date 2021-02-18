import React from 'react';
import styled from 'styled-components';
import Text from '../../foundation/Text';
import Grid from '../../foundation/layout/Grid';

const projects = [
  {
    name: 'Project1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie rhoncus vestibulum. Aenean blandit velit.',
  },
  {
    name: 'Project2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie rhoncus vestibulum. Aenean blandit velit.',
  },
  {
    name: 'Project3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie rhoncus vestibulum. Aenean blandit velit.',
  },
  {
    name: 'ProjectEmphasis',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie rhoncus vestibulum. Aenean blandit velit.',
    type: 'emphasis',
  },
];

const ProjectsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  h2 {
    flex-basis: 100%;
  };
`;

ProjectsWrapper.Card = styled.div`
  padding: 1%;
  border: 2px green dashed;
  border-right-style: solid;
  border-bottom-style: solid;
  transition: 500ms;
  :hover, :focus {
    box-shadow: 5px 5px green;
    border-style: solid;
  }
 `;

ProjectsWrapper.CardEmphasis = styled.div`
  padding: 1%;
  border: green solid 2px;
  display: flex;
  align-items: center;
  transition: 500ms;
  border: 2px green dashed;
  border-right-style: solid;
  border-bottom-style: solid;
  :hover, :focus {
    box-shadow: 5px 5px green;
    border-style: solid;
  }
  img {
    margin-right: 15px;
    max-width: 50%;
  }
  p {
    text-align: left;
  }
`;

ProjectsWrapper.CardImage = styled.img`
  max-width: 100%;
`;

export default function Project() {
  return (
    <ProjectsWrapper>
      <Text tag="h2" variant="projectTitle">Meus Projetos</Text>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <ProjectsWrapper.CardEmphasis>
              <ProjectsWrapper.CardImage src="https://placehold.it/600x400" />
              <div>
                <Text tag="h3" variant="cardTitle">
                  {projects[3].name}
                </Text>
                <Text tag="p" variant="cardText">
                  {projects[3].text}
                </Text>
              </div>
            </ProjectsWrapper.CardEmphasis>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row
          margin="32px 0"
        >
          {projects.map((project) => {
            if (project.type === 'emphasis') return undefined;
            return (
              <Grid.Column
                value={4}
                key={project.name}
              >
                <ProjectsWrapper.Card>
                  <ProjectsWrapper.CardImage src="https://placehold.it/400x500" />
                  <Text tag="h3" variant="cardTitle">
                    {project.name}
                  </Text>
                </ProjectsWrapper.Card>
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
    </ProjectsWrapper>
  );
}
