import React from 'react';
import styled from 'styled-components';
import Box from '../src/components/foundation/layout/Box';
import Banner from '../src/components/commons/Banner';
import Header from '../src/components/commons/Header';
import Projects from '../src/components/commons/Projects';
import Footer from '../src/components/commons/Footer';
import theme from '../src/theme/index';

const DivTeste = styled.div`
  height: 225vh;
  section {
    position: sticky;
    top: 0vh;
  }
`;

export default function Home() {
  return (
    <Box
      backgroundColor={theme.colors.tertiary}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      flex="1"
      flexWrap="nowrap"
    >
      <DivTeste>
        <Projects />
      </DivTeste>
      <Header />
      <Banner />
      <Footer />
    </Box>
  );
}
