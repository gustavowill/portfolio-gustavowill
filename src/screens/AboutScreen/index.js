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
        variant="projectTitle"
      >
        {aboutTexts.ptBrText.title}
      </Text>
      <AboutWrapper.Image src="/aboutContent/gustavo-willemann.jpg" alt="Foto do Gustavo Willemann" />
      <Text
        tag="p"
        textAlign="left"
        variant="cardText"
      >
        {aboutTexts.ptBrText.paragraph1}
      </Text>
      <Text
        tag="h2"
        textAlign="center"
        variant="projectTitle"
      >
        Meus Repositórios
      </Text>
      {githubRepositorys.map((repository) => (
        <AboutWrapper.RepositoryCard key={repository.name}>
          <Text
            tag="h3"
            textAlign="left"
            variant="cardTitle"
          >
            {repository.name}
          </Text>
          <Text
            tag="a"
            textAlign="center"
            variant="cardText"
            href={repository.url}
          >
            {repository.url}
          </Text>
        </AboutWrapper.RepositoryCard>
      ))}
    </AboutWrapper>
  );
}
