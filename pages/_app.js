/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Box from '../src/components/foundation/layout/Box';
import Footer from '../src/components/patterns/Footer';
import Header from '../src/components/patterns/Header';
import theme from '../src/theme';
import GlobalStyle from '../src/theme/GlobalStyle';
import Modal from '../src/components/commons/Modal';
import ContactForm from '../src/components/patterns/ContactForm';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openFormModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="imagem/png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Box
          backgroundColor={theme.colors.tertiary}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          flex="1"
          flexWrap="nowrap"
        >
          <Modal
            isModalOpen={isModalOpen}
            onClose={closeModal}
          >
            <ContactForm />
          </Modal>
          <Header
            isModalOpen={isModalOpen}
            openFormModal={openFormModal}
          />
          <Component {...pageProps} />
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  );
}
