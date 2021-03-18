import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from '../../components/commons/Link';
import Box from '../../components/foundation/layout/Box';
import Text from '../../components/foundation/Text';
import ProjectCard from './styles';

export default function ProjectScreen({
  image, title, description, link,
}) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
    >
      <ProjectCard>
        <Text
          tag="h2"
          textAlign="center"
          variant="projectTitle"
        >
          {title}
        </Text>
        <Image
          src={image}
          alt="Imagem do projeto"
          width="500"
          height="500"
        />
        <Text
          tag="p"
          variant="cardText"
        >
          {description}
        </Text>
        <Text
          tag="h3"
          variant="cardTitleSx"
        >
          Visite o projeto
        </Text>
        <Link
          variant="cardText"
          href="http://www.gustavowillemann.com"
        >
          {link}
        </Link>
      </ProjectCard>
    </Box>
  );
}

ProjectScreen.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
