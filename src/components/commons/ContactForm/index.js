import React, { useState } from 'react';
import FormInput from '../../forms/FormInput';
import Button from '../Button';
import ContactFormWrapper from './styles';

const formInfoValues = {
  name: '',
  email: '',
  message: '',
};

export default function ContactForm() {
  const [isValidForm, setIsValidForm] = useState(false);
  const [formInfo, setFormInfo] = useState(formInfoValues);

  function validateForm() {
    if (formInfo.name.length > 0 && formInfo.email.length > 0) setIsValidForm(true);
    else setIsValidForm(false);
  }

  function handleChange(event) {
    const fieldId = event.target.getAttribute('id');
    formInfoValues[fieldId] = event.target.value;
    setFormInfo(formInfoValues);
    validateForm();
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formInfo);
  }

  return (
    <ContactFormWrapper>
      <h3>Envie sua mensagem</h3>
      <FormInput
        id="name"
        placeholder="Nome"
        onChange={handleChange}
      >
        Seu Nome
      </FormInput>
      <FormInput
        id="email"
        placeholder="Email"
        onChange={handleChange}
      >
        Email
      </FormInput>
      <FormInput
        tag="textarea"
        id="message"
        placeholder="Mesagem"
        onChange={handleChange}
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
