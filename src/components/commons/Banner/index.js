import React from 'react';
import Text from '../../foundation/Text';
import BannerWrapper from './styles';

export default function Banner() {
  return (
    <BannerWrapper
      display="flex"
      flexDirection="column"
      justifyContent="center"
      flex="0 0 94vh"
      flexWrap="nowrap"
      backgroundImage=""
      backgroundPosition="center"
      backgroundSize="cover"
      background="linear-gradient(30deg, #333 30%, transparent)"
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
        variant="subtitle"
      >
        Portfólio
      </Text>
    </BannerWrapper>
  );
}
