import styled from 'styled-components';
import theme from '../../../theme';

const ContactFormWrapper = styled.form`
  padding: 0rem 2rem 1rem;
  background: ${theme.colors.tertiary};
  border: 2px solid ${theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  ${theme.typographyVariants.cardText};
  
  h3 {
    ${theme.typographyVariants.cardTitle};
  }

  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1rem;
  }

  input, textarea {
    display: block;
  }

  textarea {
    height: 10rem;
  }

  button {
    width: 100%;
  }

  #buttonFormStatusDONE {
    background: lightgreen;
    border: 3px solid green;
    :hover {
      cursor: initial;
      box-shadow: none;
      pointer-events: none;
    }
  }

  #buttonFormStatusERROR {
    background: pink;
    border: 3px solid red;
    :hover {
      cursor: initial;
      box-shadow: none;
      pointer-events: none;
    }
  }
`;

export default ContactFormWrapper;
