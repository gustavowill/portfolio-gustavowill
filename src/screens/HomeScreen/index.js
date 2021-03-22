import React from 'react';
import Image from 'next/image';
import Text from '../../components/foundation/Text';
import Grid from '../../components/foundation/layout/Grid';
import ProjectsWrapper from './styles';
import { projects } from '../../../db.json';
import Link from '../../components/commons/Link';

export default function Project() {
  const regularProjects = projects.filter((project) => project.type === 'regular');
  const emphasisProject = projects.find((project) => project.type === 'emphasis');

  return (
    <ProjectsWrapper>
      <Text
        tag="h2"
        variant={{ xs: 'sectionTitleXs', md: 'sectionTitle' }}
      >
        Meus Projetos
      </Text>
      <Grid>
        <Grid.Row>
          <Grid.Column
            value="12"
          >
            <Link href={`/projects/${emphasisProject.title.toLowerCase()}`}>
              <ProjectsWrapper.EmphasisCard>
                <img src={emphasisProject.image} alt="Imagem do projeto" />
                <div>
                  <Text
                    tag="h3"
                    variant={{ xs: 'componentTitleXs', md: 'componentTitle' }}
                    textAlign={{ xs: 'center', md: 'left' }}
                  >
                    {emphasisProject.title}
                  </Text>
                  <Text
                    tag="p"
                    variant={{ xs: 'regularTextXs', md: 'regularText' }}
                    textAlign={{ xs: 'center', md: 'left' }}
                    display={{ xs: 'none', md: 'block' }}
                  >
                    {emphasisProject.shortDescription}
                  </Text>
                </div>
              </ProjectsWrapper.EmphasisCard>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <ProjectsWrapper.List>
            {regularProjects.map((project) => (
              <Grid.Column
                as="li"
                value={{ xs: 12, md: 4 }}
                key={project.title}
              >
                <Link href={`/projects/${project.title.toLowerCase()}`}>
                  <ProjectsWrapper.Card>
                    <Image
                      src={project.image}
                      alt="Imagem do projeto"
                      width={800}
                      height={450}
                    />
                    <Text
                      tag="h3"
                      variant={{ xs: 'componentTitleXs', md: 'componentTitle' }}
                    >
                      {project.title}
                    </Text>
                    <ProjectsWrapper.CardDescription>
                      <Text
                        tag="p"
                        variant={{ xs: 'regularTextXs', md: 'regularText' }}
                      >
                        {project.shortDescription}
                      </Text>
                    </ProjectsWrapper.CardDescription>
                  </ProjectsWrapper.Card>
                </Link>
              </Grid.Column>
            ))}
          </ProjectsWrapper.List>
        </Grid.Row>
      </Grid>
    </ProjectsWrapper>
  );
}
