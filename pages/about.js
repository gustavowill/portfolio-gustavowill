import React from 'react';
import SEO from '../src/components/commons/SEO';
import AboutScreen from '../src/screens/AboutScreen';

// eslint-disable-next-line react/prop-types
export default function AboutPage({ githubRepositorys }) {
  return (
    <>
      <SEO
        headTitle="Sobre"
      />
      <AboutScreen
        githubRepositorys={githubRepositorys}
      />
    </>
  );
}

export async function getStaticProps() {
  const githubRepositorys = await fetch('https://api.github.com/users/guswillemann/repos')
    .then((response) => response.json())
    .then((responseAsObject) => responseAsObject.map((teste) => {
      const { name } = teste;
      const url = teste.html_url;
      return {
        name,
        url,
      };
    }));

  return {
    props: {
      githubRepositorys,
    },
  };
}
