/* eslint-disable react/prop-types */
import React from 'react';
import Text from '../../components/foundation/Text';
import aboutTexts from '../../../public/aboutContent/aboutTexts.json';
import AboutWrapper from './styles';

export default function About({ githubRepositorys }) {
  return (
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
  );
}
