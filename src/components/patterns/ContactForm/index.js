import React, { useState } from 'react';
import FormInput from '../../forms/FormInput';
import Button from '../../commons/Button';
import ContactFormWrapper from './styles';

export default function ContactForm() {
  const [isValidForm, setIsValidForm] = useState(false);
  const [formInfo, setFormInfo] = useState({
    name: '',
    email: '',
    message: '',
  });

  function validateForm() {
    if (formInfo.name.length > 0 && formInfo.email.length > 0) setIsValidForm(true);
    else setIsValidForm(false);
  }

  function handleChange(event) {
    const fieldId = event.target.getAttribute('id');
    setFormInfo({
      ...formInfo,
      [fieldId]: event.target.value,
    });
    validateForm();
  }

  function handleSubmit(event) {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(formInfo);
  }

  return (
    <ContactFormWrapper>
      <h3>Envie sua mensagem</h3>
      <FormInput
        id="name"
        placeholder="Nome"
        onChange={handleChange}
        value={formInfo.name}
      >
        Seu Nome
      </FormInput>
      <FormInput
        id="email"
        placeholder="Email"
        onChange={handleChange}
        value={formInfo.email}
      >
        Email
      </FormInput>
      <FormInput
        tag="textarea"
        id="message"
        placeholder="Mesagem"
        onChange={handleChange}
        value={formInfo.message}
      >
        Mensagem
      </FormInput>

      <Button
        onClick={handleSubmit}
        type="submit"
        isDisabled={!isValidForm}
      >
        Enviar
      </Button>
    </ContactFormWrapper>
  );
}
