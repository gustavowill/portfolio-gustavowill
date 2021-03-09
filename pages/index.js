import React, { useState } from 'react';
import Modal from '../src/components/commons/Modal';
import BackLayer from '../src/components/foundation/layout/BackLayer';
import Box from '../src/components/foundation/layout/Box';
import About from '../src/components/patterns/About';
import Banner from '../src/components/patterns/Banner';
import ContactForm from '../src/components/patterns/ContactForm';
import Footer from '../src/components/patterns/Footer';
import Header from '../src/components/patterns/Header';
import Projects from '../src/components/patterns/Projects';
import theme from '../src/theme/index';

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
