export default class ContactFormObject {
  constructor(cy) {
    this.cy = cy;
    this.cy.get('button[type=submit]').should('be.disabled');
  }

  fillContactForm({ name, email, message }) {
    this.cy.get('input[name=name]').type(name);
    this.cy.get('input[name=email]').type(email);
    this.cy.get('textarea[name=message]').type(message);
    return this;
  }

  submitContactForm({ expectBtnId }) {
    this.cy.get('button[type=submit]')
      .should('not.be.disabled')
      .click();
    this.cy.wait('@submitHttp')
      .then(() => {
        this.cy.get('button[type=submit]').should('have.id', `buttonFormStatus${expectBtnId}`);
      });
    return this;
  }
}
