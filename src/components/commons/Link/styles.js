import styled from 'styled-components';
import getTypographyVariant from '../../../theme/utils/getTypographyVariant';

const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
  ${({ variant }) => {
    if (variant !== undefined) return getTypographyVariant();
    return undefined;
  }}
`;

export default StyledLink;
