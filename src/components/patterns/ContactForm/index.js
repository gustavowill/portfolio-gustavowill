import React, { useEffect, useState } from 'react';
import { Lottie } from '@crello/react-lottie';
import animationSuccess from './animations/submitSuccess.json';
import animationError from './animations/submitError.json';
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
    else setFormStatus(formStates.DEFAULT);
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
        {formStatus === 'DONE' && (
          <>
            <span>Mensagem enviada</span>
            <Lottie
              width="2.5rem"
              height="2.5rem"
              config={{ animationData: animationSuccess }}
              // https://lottiefiles.com/5449-success-tick
            />
          </>
        )}
        {formStatus === 'ERROR' && (
          <>
            <span>Falha no envio da mensagem</span>
            <Lottie
              width="2.3rem"
              height="2.3rem"
              speed="1.6"
              config={{ animationData: animationError }}
              // https://lottiefiles.com/5707-error
            />
          </>
        )}
      </Button>
    </ContactFormWrapper>
  );
}
