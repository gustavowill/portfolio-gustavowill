/* eslint-disable indent */
import styled, { css } from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';
import getThemeColor from '../../../theme/utils/getThemeColor';

const buttonVariants = {
  default: css`
    height: 3rem;
    border: 2px solid ${getThemeColor('primary')};
    border-top-style: dashed;
    border-left-style: dashed;
    background: ${getThemeColor('tertiary')};
    transition: 500ms;
    ${propToStyle('width')}
    :disabled {
      border: 2px dashed;
    }
    :hover:not(:disabled) {
      cursor: pointer;
      box-shadow: 5px 5px ${getThemeColor('primary')};
      background: ${getThemeColor('buttonHover')};
      border-style: solid;
    }
  `,
  navBar: css`
    background: transparent;
    border: none;
    color: ${getThemeColor('primary')};
    text-decoration: none;
    padding: 0;
    margin-left: 5%;
    :hover, :focus {
      color: ${getThemeColor('linkHover')};
    }
  `,
};

const ButtonWrapper = styled.button`
    ${(props) => buttonVariants[props.variant]}
`;

export default ButtonWrapper;
