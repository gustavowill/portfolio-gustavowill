import React from 'react';
import Box from '../src/components/foundation/layout/Box';
import Banner from '../src/components/commons/Banner';
import Header from '../src/components/commons/Header';
import Projects from '../src/components/commons/Projects';
import Footer from '../src/components/commons/Footer';

export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      flex="1"
      flexWrap="nowrap"
    >
      <Header />
      <Banner />
      <Projects />
      <Footer />
    </Box>
  );
}
