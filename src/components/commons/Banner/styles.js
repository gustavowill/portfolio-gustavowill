import styled from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';

const BannerWrapper = styled.section`
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flex')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundPosition')}
  ${propToStyle('backgroundSize')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('background')}
`;

export default BannerWrapper;
