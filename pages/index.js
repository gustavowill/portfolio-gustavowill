import React, { useState } from 'react';
import Box from '../src/components/foundation/layout/Box';
import Banner from '../src/components/commons/Banner';
import Header from '../src/components/commons/Header';
import Projects from '../src/components/commons/Projects';
import Footer from '../src/components/commons/Footer';
import theme from '../src/theme/index';
import About from '../src/components/commons/About';
import BackLayer from '../src/components/foundation/layout/BackLayer';
import Modal from '../src/components/commons/Modal';
import ContactForm from '../src/components/commons/ContactForm';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openFormModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <Box
      backgroundColor={theme.colors.tertiary}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      flex="1"
      flexWrap="nowrap"
    >
      <Modal
        isModalOpen={isModalOpen}
        onClose={closeModal}
      >
        <ContactForm />
      </Modal>
      <Banner />
      <Header
        isModalOpen={isModalOpen}
        openFormModal={openFormModal}
      />
      <BackLayer>
        <BackLayer.Container>
          <Projects />
          <About />
          <Footer />
        </BackLayer.Container>
      </BackLayer>
    </Box>
  );
}
