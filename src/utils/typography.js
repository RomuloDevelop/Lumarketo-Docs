import Typography from "typography"
import fairyGatesTheme from 'typography-theme-fairy-gates'

fairyGatesTheme.overrideThemeStyles = () => ({
    a: {
      textShadow: `none`,
      backgroundImage: `none`,
    },
  });
const typography = new Typography(fairyGatesTheme);
export default typography
export const rhythm = typography.rhythm