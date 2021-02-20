import React from 'react';
import Text from '../../foundation/Text';
import BannerTitle from './BannerTitle';
import BannerWrapper from './styles';

export default function Banner() {
  return (
    <BannerWrapper>
      <BannerTitle />
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
