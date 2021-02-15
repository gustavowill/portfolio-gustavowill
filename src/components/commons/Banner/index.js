import React from 'react';
import Text from '../../foundation/Text';
import Box from '../../foundation/layout/Box';

export default function Banner() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      flex="1"
      flexWrap="nowrap"
      backgroundImage="url(https://placehold.it/400x400)"
      height="95vh"
      width="100vw"
    >
      <Text
        tag="h1"
        textAlign="center"
        variant="title"
      >
        Gustavo Willemann
      </Text>
      <Text
        tag="p"
        textAlign="Center"
        variant="regularText"
      >
        Portfolio
      </Text>
    </Box>
  );
}
