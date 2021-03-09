import React, { useEffect, useState } from 'react';
import FormInput from '../../forms/FormInput';
import Button from '../../commons/Button';
import ContactFormWrapper from './styles';

const formStates = {
  DEFAULT: 'DEFAULT',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState(formStates.DEFAULT);
  const [isValidForm, setIsValidForm] = useState(false);
  const [formInfo, setFormInfo] = useState({
    name: '',
    email: '',
    message: '',
  });

  function validateForm() {
    if (formInfo.name.length > 0 && formInfo.email.length > 0 && formInfo.message.length > 0) {
      setIsValidForm(true);
    } else setIsValidForm(false);
  }

  function handleChange(event) {
    const fieldId = event.target.getAttribute('id');
    setFormInfo({
      ...formInfo,
      [fieldId]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://contact-form-api-jamstack.herokuapp.com/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formInfo),
    }).then((apiResponse) => {
      if (apiResponse.ok) return apiResponse.json();
      throw new Error('Falha no envio da menssagem');
    }).then(() => {
      setFormStatus(formStates.DONE);
    }).catch(() => {
      setFormStatus(formStates.ERROR);
    });
  }

  useEffect(() => {
    if (formStatus === 'ERROR') {
      setTimeout(() => {
        setFormStatus(formStates.DEFAULT);
      }, 3000);
    }
  }, [formStatus]);

  useEffect(() => {
    if (formStatus !== 'DONE') validateForm();
  }, [formInfo]);

  return (
    <ContactFormWrapper
      onSubmit={handleSubmit}
    >
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
        type="email"
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
        id={`buttonFormStatus${formStatus}`}
        type="submit"
        isDisabled={!isValidForm}
      >
        {formStatus === 'DEFAULT' && 'Enviar'}
        {formStatus === 'DONE' && 'Mensagem enviada ✓'}
        {formStatus === 'ERROR' && 'Falha no envio da mensagem ✗'}
      </Button>
    </ContactFormWrapper>
  );
}
