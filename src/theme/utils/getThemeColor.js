export default function getThemeColor(themeColor) {
  return ({ theme }) => theme.colors[themeColor];
}
