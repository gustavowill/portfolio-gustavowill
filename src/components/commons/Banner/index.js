import React from 'react';
import styled from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';
import Text from '../../foundation/Text';

const BannerBackground = styled.section`
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flex')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundPosition')}
  ${propToStyle('backgroundSize')}
`;

export default function Banner() {
  return (
    <BannerBackground
      display="flex"
      flexDirection="column"
      justifyContent="center"
      flex="0 0 90vh"
      flexWrap="nowrap"
      backgroundImage="url(https://placehold.it/400x400)"
      backgroundPosition="center"
      backgroundSize="cover"
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
    </BannerBackground>
  );
}
