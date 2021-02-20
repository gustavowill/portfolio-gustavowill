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
      background="linear-gradient(10deg, #222 5%, transparent 35%), linear-gradient(180deg, #222 0%, transparent 75%)"
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
