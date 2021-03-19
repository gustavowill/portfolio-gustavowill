import styled from 'styled-components';
import getTypographyVariant from '../../../theme/utils/getTypographyVariant';

const StyledLink = styled.a`
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  text-decoration: none;
  ${getTypographyVariant()}
`;

export default StyledLink;
