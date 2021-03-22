/* eslint-disable react/prop-types */
import React from 'react';
import Text from '../../components/foundation/Text';
import aboutTexts from '../../../public/aboutContent/aboutTexts.json';
import AboutWrapper from './styles';
import Grid from '../../components/foundation/layout/Grid';
import Box from '../../components/foundation/layout/Box';

export default function About({ githubRepositorys }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid>
        <Grid.Row>
          <Grid.Column
            value="12"
          >
            <AboutWrapper>
              <Text
                tag="h2"
                textAlign="center"
                variant={{ xs: 'sectionTitleXs', md: 'sectionTitle' }}
              >
                {aboutTexts.ptBrText.title}
              </Text>
              <AboutWrapper.Image src="/aboutContent/gustavo-willemann.jpg" alt="Foto do Gustavo Willemann" />
              <Text
                tag="p"
                textAlign="left"
                variant={{ xs: 'regularTextXs', md: 'regularText' }}
              >
                {aboutTexts.ptBrText.paragraph1}
              </Text>
              <Text
                tag="h2"
                textAlign="center"
                variant={{ xs: 'sectionTitleXs', md: 'sectionTitle' }}
              >
                Meus Repositórios
              </Text>
              {githubRepositorys.map((repository) => (
                <AboutWrapper.RepositoryCard key={repository.name}>
                  <Text
                    tag="h3"
                    textAlign="left"
                    variant={{ xs: 'componentTitleXs', md: 'componentTitle' }}
                  >
                    {repository.name}
                  </Text>
                  <Text
                    tag="a"
                    textAlign="center"
                    variant={{ xs: 'regularTextXs', md: 'regularText' }}
                    href={repository.url}
                  >
                    {repository.url}
                  </Text>
                </AboutWrapper.RepositoryCard>
              ))}
            </AboutWrapper>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Box>
  );
}
