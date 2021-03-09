import React from 'react';
import Box from '../../foundation/layout/Box';
import AboutWrapper from './styles';
import Text from '../../foundation/Text';
import aboutContent from '../../../../public/aboutContent/aboutContent.json';
import theme from '../../../theme';

export default function About() {
  return (
    <Box
      backgroundColor={theme.colors.secondary}
      display="flex"
      justifyContent="Center"
    >
      <AboutWrapper>
        <AboutWrapper.LeftSide>
          <Text
            tag="h2"
            textAlign="left"
            variant="cardTitle"
          >
            {aboutContent.ptBrText.title}
          </Text>
          <Text
            tag="p"
            textAlign="left"
            variant="cardText"
          >
            {aboutContent.ptBrText.paragraph1}
          </Text>
          <Text
            tag="p"
            textAlign="left"
            variant="cardText"
          >
            {aboutContent.ptBrText.paragraph2}
          </Text>
        </AboutWrapper.LeftSide>
        <AboutWrapper.RightSide>
          <AboutWrapper.Image src={aboutContent.image} alt="Foto do Gustavo Willemann" />
        </AboutWrapper.RightSide>
      </AboutWrapper>
    </Box>
  );
}
