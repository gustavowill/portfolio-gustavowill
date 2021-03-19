import React from 'react';
import SEO from '../src/components/commons/SEO';
import Banner from '../src/components/patterns/Banner';
import Projects from '../src/components/patterns/Projects';

export default function Home() {
  return (
    <>
      <SEO />
      <Banner />
      <Projects />
    </>
  );
}
