import React from 'react';
import PropTypes from 'prop-types';
import ProjectScreen from '../../src/screens/ProjectScreen';
import db from '../../db.json';
import SEO from '../../src/components/commons/SEO';

export default function ProjectPage({
  image, title, description, link,
}) {
  return (
    <>
      <SEO
        headTitle={title}
      />
      <ProjectScreen
        image={image}
        title={title}
        description={description}
        link={link}
      />
    </>
  );
}

ProjectPage.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { projects } = db;
  const projectInfo = projects.find((project) => (
    project.title.toLowerCase() === slug
  ));

  return {
    props: {
      image: projectInfo.image,
      title: projectInfo.title,
      description: projectInfo.description,
      link: projectInfo.link,
    },
  };
}

export async function getStaticPaths() {
  const { projects } = db;
  const paths = projects.map((project) => (
    { params: { slug: project.title.toLowerCase() } }
  ));

  return {
    paths,
    fallback: false,
  };
}
