import React from 'react';
import Box from '../src/components/foundation/layout/Box';
import Banner from '../src/components/commons/Banner';
import Header from '../src/components/commons/Header';
import ProjectsWrapper from '../src/components/commons/ProjectsWrapper';
import Footer from '../src/components/commons/Footer';
import Text from '../src/components/foundation/Text';

const cardTitle = 'Card Title';
const cardText = 'Card Text';

export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      flex="1"
      flexWrap="nowrap"
    >
      <Banner />
      <Header />
      <ProjectsWrapper>
        <Text tag="h2" variant="standardText">Meus Projetos</Text>
        <ProjectsWrapper.Card>
          <ProjectsWrapper.CardImage src="https://placehold.it/250x400" />
          <Text tag="h3" variant="standardText">
            {cardTitle}
          </Text>
        </ProjectsWrapper.Card>
        <ProjectsWrapper.Card>
          <ProjectsWrapper.CardImage src="https://placehold.it/250x400" />
          <Text tag="h3" variant="standardText">
            {cardTitle}
          </Text>
        </ProjectsWrapper.Card>
        <ProjectsWrapper.Card>
          <ProjectsWrapper.CardImage src="https://placehold.it/250x400" />
          <Text tag="h3" variant="standardText">
            {cardTitle}
          </Text>
        </ProjectsWrapper.Card>
        <ProjectsWrapper.CardEmphasis>
          <ProjectsWrapper.CardImage src="https://placehold.it/400x300" />
          <div>
            <Text tag="h3" variant="standardText">
              {cardTitle}
            </Text>
            <Text tag="p" variant="standardText">
              {cardText}
            </Text>
          </div>
        </ProjectsWrapper.CardEmphasis>
      </ProjectsWrapper>
      <Footer />
    </Box>
  );
}
