import React from 'react';
import SEO from '../src/components/commons/SEO';
import Banner from '../src/components/patterns/Banner';
import HomeScreen from '../src/screens/HomeScreen';

export default function Home() {
  return (
    <>
      <SEO />
      <Banner />
      <HomeScreen />
    </>
  );
}
