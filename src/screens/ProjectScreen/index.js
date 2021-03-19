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
          variant={{ xs: 'sectionTitleXs', md: 'sectionTitle' }}
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
          variant={{ xs: 'regularTextXs', md: 'regularText' }}
        >
          {description}
        </Text>
        <Text
          tag="h3"
          variant={{ xs: 'componentTitleXs', md: 'componentTitle' }}
        >
          Visite o projeto
        </Text>
        <Link
          variant={{ xs: 'regularTextXs', md: 'regularText' }}
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
