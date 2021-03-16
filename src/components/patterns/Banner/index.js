import React, { useState } from 'react';
import LockScroll from '../../commons/LockScroll';
import Text from '../../foundation/Text';
import BannerTitle from './BannerTitle';
import BannerWrapper from './styles';

export default function Banner() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  return (
    <BannerWrapper
      bannerVisible={isBannerVisible}
      onClick={() => setIsBannerVisible(!isBannerVisible)}
    >
      {isBannerVisible && <LockScroll />}
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
