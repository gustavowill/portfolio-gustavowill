import { css } from 'styled-components';
import breakpoints from '../Breakpoints';

const { breakpointsX, breakpointsY } = breakpoints;

export default function breakpointsMedia(cssByBreakpoints) {
  const breakpointsNames = Object.keys(cssByBreakpoints);
  return breakpointsNames.map((breakpointName) => css`
    @media screen and (min-width: ${breakpointsX[breakpointName]}px) {
      ${cssByBreakpoints[breakpointName]}
    }
  `);
}

export function breakpointsMediaYAxis(cssByBreakpoints) {
  const breakpointsNames = Object.keys(cssByBreakpoints);
  return breakpointsNames.map((breakpointName) => css`
    @media screen and (min-height: ${breakpointsY[breakpointName]}px) {
      ${cssByBreakpoints[breakpointName]}
    }
  `);
}
