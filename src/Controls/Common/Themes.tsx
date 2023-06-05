import { useColorScheme } from 'react-native';

import {COLOR} from '@Layout/Color';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof COLOR.light & keyof typeof COLOR.dark,
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  }
  return COLOR[theme][colorName];
}

export type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};