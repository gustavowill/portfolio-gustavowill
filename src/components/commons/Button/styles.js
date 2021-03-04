/* eslint-disable indent */
import styled, { css } from 'styled-components';
import theme from '../../../theme';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';

const buttonVariants = {
  default: css`
    height: 3rem;
    border: 2px solid ${theme.colors.primary};
    border-top-style: dashed;
    border-left-style: dashed;
    background: ${theme.colors.tertiary};
    transition: 500ms;
    ${propToStyle('width')}
    :disabled {
      border: 2px dashed;
    }
    :hover:not(:disabled) {
      cursor: pointer;
      box-shadow: 5px 5px ${theme.colors.primary};
      background: ${theme.colors.buttonHover};
      border-style: solid;
    }
  `,
  navBar: css`
    background: transparent;
    border: none;
    color: ${theme.colors.primary};
    text-decoration: none;
    padding: 0;
    margin-left: 5%;
    ${breakpointsMedia({
      xs: theme.typographyVariants.navLinkTextSx,
      md: theme.typographyVariants.navLinkText,
    })}
    :hover, :focus {
      color: ${theme.colors.linkHover};
    }
  `,
};

const ButtonWrapper = styled.button`
    ${(props) => buttonVariants[props.variant]}
`;

export default ButtonWrapper;
