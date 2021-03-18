import styled from 'styled-components';

const StyledLink = styled.a`
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  text-decoration: none;
  ${({ theme, variant }) => theme.typographyVariants[variant]}
`;

export default StyledLink;
