import React from 'react';
import Text from '../../foundation/Text';
import Grid from '../../foundation/layout/Grid';
import ProjectsWrapper from './styles';
import projects from '../../../../public/projects/projects.json';

export default function Project() {
  return (
    <ProjectsWrapper>
      <ProjectsWrapper.Container>
        <Text tag="h2" variant="projectTitle">Meus Projetos</Text>
        <Grid>
          <Grid.Row>
            <Grid.Column
              value={12}
            >
              <ProjectsWrapper.CardEmphasis>
                <img src={projects[3].image} alt={projects[3].imageAlt} />
                <div>
                  <Text
                    tag="h3"
                    variant="cardTitle"
                    textAlign={{ xs: 'center', md: 'left' }}
                  >
                    {projects[3].name}
                  </Text>
                  <Text
                    tag="p"
                    variant="cardText"
                    textAlign={{ xs: 'center', md: 'left' }}
                    display={{ xs: 'none', md: 'block' }}
                  >
                    {projects[3].text}
                  </Text>
                </div>
              </ProjectsWrapper.CardEmphasis>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            {projects.map((project) => {
              if (project.type === 'emphasis') return undefined;
              return (
                <Grid.Column
                  value={{ xs: 12, md: 4 }}
                  key={project.name}
                >
                  <ProjectsWrapper.Card>
                    <img src={project.image} alt={project.imageAlt} />
                    <Text tag="h3" variant="cardTitle">
                      {project.name}
                    </Text>
                  </ProjectsWrapper.Card>
                </Grid.Column>
              );
            })}
          </Grid.Row>
        </Grid>
      </ProjectsWrapper.Container>
    </ProjectsWrapper>
  );
}
