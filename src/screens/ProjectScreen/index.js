import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../components/commons/Link';
import Box from '../../components/foundation/layout/Box';
import Text from '../../components/foundation/Text';
import ProjectWrapper from './styles';
import Grid from '../../components/foundation/layout/Grid';

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
      <Grid>
        <Grid.Row>
          <Grid.Column
            value="12"
          >
            <ProjectWrapper>
              <Text
                tag="h2"
                textAlign="center"
                variant={{ xs: 'sectionTitleXs', md: 'sectionTitle' }}
              >
                {title}
              </Text>
              <ProjectWrapper.Image src={image} alt="Image do projeto" />
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
                href={link}
              >
                {link}
              </Link>
            </ProjectWrapper>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Box>
  );
}

ProjectScreen.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
