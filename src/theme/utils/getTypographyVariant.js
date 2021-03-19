import breakpointsMedia from './breakpointsMedia';

export default function getTypographyVariant() {
  return ({ theme, variant }) => {
    if (typeof variant === 'string') return theme.typographyVariants[variant];
    const breakpoints = Object.keys(variant);
    const typographyByBreakpoints = {};
    breakpoints.forEach((breakpoint) => {
      typographyByBreakpoints[breakpoint] = theme.typographyVariants[variant[breakpoint]];
    });

    return breakpointsMedia(typographyByBreakpoints);
  };
}
