/// <reference types="cypress" />

import ContactFormObject from '../../../../../src/components/patterns/ContactForm/ContactForm.object';

const contactBtn = 'button[name=contact]';
const banner = 'section[name=introBanner]';

const inputValues = {
  name: 'someName',
  email: 'some@email.com',
  message: 'someRandomMessage',
};

function AccessContactFrom(url) {
  cy.visit(url);
  cy.get('#ModalWrapper').should('have.css', 'opacity', '0');
  cy.get(banner).click();
  cy.get(contactBtn).click();
  cy.get('#ModalWrapper').should('have.css', 'opacity', '1');
  cy.get('#ModalWrapper form').should('exist');
}

describe('modal/ContactsForm', () => {
  describe('accessed from multiple pages', () => {
    it('is accessed from the home page', () => {
      AccessContactFrom('http://localhost:3000/');
    });
    it('is accessed from the about page', () => {
      AccessContactFrom('http://localhost:3000/about/');
    });
  });

  describe('fills and submit the contact form', () => {
    it('is a submission success', () => {
      cy.intercept('https://contact-form-api-jamstack.herokuapp.com/message').as('submitHttp');

      cy.visit('http://localhost:3000');
      cy.get(banner).click();
      cy.get(contactBtn).click();

      const contactForm = new ContactFormObject(cy);
      contactForm
        .fillContactForm(inputValues)
        .submitContactForm({ expectBtnId: 'DONE' });
    });

    it('is a submission fail', () => {
      cy.intercept('https://contact-form-api-jamstack.herokuapp.com/message', (req) => {
        req.reply({});
      }).as('submitHttp');

      cy.visit('http://localhost:3000');
      cy.get(banner).click();
      cy.get(contactBtn).click();

      const contactForm = new ContactFormObject(cy);
      contactForm
        .fillContactForm(inputValues)
        .submitContactForm({ expectBtnId: 'ERROR' });
    });
  });
});
