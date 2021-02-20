import React from 'react';
import styled from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';
import Text from '../../foundation/Text';

const BannerWrapper = styled.section`
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flex')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundPosition')}
  ${propToStyle('backgroundSize')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('background')}
`;

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
