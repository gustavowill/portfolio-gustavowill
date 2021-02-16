import React from 'react';
import Box from '../src/components/foundation/layout/Box';
import Banner from '../src/components/commons/Banner';

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
    </Box>
  );
}
