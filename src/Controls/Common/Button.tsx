import React, {useMemo} from 'react';
import {
  Pressable,
  PressableProps,
  View,
  ViewProps,
  StyleSheet,
  ViewStyle
} from 'react-native';
import Text from './Text';
import {useThemeColor} from './Themes';
import {ThemeProps} from './Themes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Layout } from '@Layout/Layout';
type ButtonProps = ThemeProps &
  PressableProps & {
    title?: 'string';
    leftIcons?: typeof Ionicons.name;
    onButtonPressed?: () => void;
    containerStyle?:ViewStyle;
  };

const Button = (props: ButtonProps): JSX.Element => {
  const {onButtonPressed, containerStyle,title, leftIcons, lightColor, darkColor} = props;

  const content = useMemo(() => {
    if (!title && leftIcons) {
      //Button only Icon
      return <Ionicons name={leftIcons} size={Layout.Button.IconOnly} />;
    }
    if (!leftIcons && title) {
      //Button only text
      return <Text>{content}</Text>;
    }
    if (leftIcons && title) {
      // Button text and icon
      return (
        <View>
          <Ionicons name={leftIcons} size={Layout.Button.Text}/>
          <Text>{content}</Text>
        </View>
      );
    }
    return <></>;
  }, [title, leftIcons]);

  const borderColor = useThemeColor(
    {light: lightColor, dark: darkColor},
    'textInputBorder',
  );
  const backgroundColor = useThemeColor(
    {light: lightColor, dark: darkColor},
    'background',
  );

  const rippleColor = useThemeColor(
  {light: lightColor, dark: darkColor},
  'rippleColor',
);


  return (
    <View style={[Style.defaultButtonStyle,{borderColor, backgroundColor},containerStyle]}>
        <Pressable
      android_ripple={{color:rippleColor , borderless: false}}
      onPress={onButtonPressed}
      style={[Style.defaultPressableStyle]}>
      {content}
    </Pressable>
    </View>
  );
};

const Style = StyleSheet.create({
  defaultPressableStyle: {
    padding: 7.5,
    alignItems: 'center',
    justifyContent: 'center',
    height:Layout.Button.Height,
    minWidth:Layout.Button.MinWidth
  },
  defaultButtonStyle:{
    borderWidth: 1,
    borderRadius: 10,
    overflow:'hidden',

  }
});

export default Button;
