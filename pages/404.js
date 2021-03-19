import React from 'react';
import Box from '../src/components/foundation/layout/Box';
import Text from '../src/components/foundation/Text';

export default function Page404() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text
        tag="h1"
        variant="title"
      >
        404
      </Text>
      <Text
        variant="sectionTitleXs"
      >
        Página não encontrada
      </Text>
    </Box>
  );
}
