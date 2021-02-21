import React from 'react';
import Box from '../src/components/foundation/layout/Box';
import Banner from '../src/components/commons/Banner';
import Header from '../src/components/commons/Header';
import Projects from '../src/components/commons/Projects';
import Footer from '../src/components/commons/Footer';
import theme from '../src/theme/index';

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
      <Projects />
      <Header />
      <Banner />
      <Footer />
    </Box>
  );
}
