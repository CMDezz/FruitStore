import React, {useCallback} from 'react';
import {ThemeProps} from './Themes';
import {useTheme} from '@react-navigation/native';
import {
  View,
  ViewStyle,
  TouchableOpacity,
  StyleProp,
  StyleSheet,
  TextStyle,
} from 'react-native';
import MaskedTextInput, {MaskInputProps} from 'react-native-mask-input';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Layout} from '@Layout/Layout';
import Text from './Text';
import {useThemeColor} from './Themes';

type TextInputProps = ThemeProps &
  MaskInputProps & {
    label?: string;
    containerStyle?: ViewStyle;
    borderProps?: ThemeProps;
    textInputProps?: TextStyle;
    iconProps?: ThemeProps;
    leftIcon?: typeof Ionicons.name;
    textInputStyle?: ViewStyle;
    textLabelStyle?: TextStyle;
    onLeftIconPress?: () => void;
  };

const TextInput = (props: TextInputProps): JSX.Element => {
  const {
    label,
    lightColor,
    darkColor,
    onChange,
    borderProps,
    containerStyle,
    textInputProps,
    textInputStyle,
    iconProps,
    textLabelStyle,
    leftIcon,
    onLeftIconPress,
    ...otherTextInputProps
  } = props;

  const borderColor = useThemeColor(
    {light: lightColor, dark: darkColor},
    'textInputBorder',
  );
  const backgroundColor = useThemeColor(
    {light: borderProps?.lightColor, dark: borderProps?.darkColor},
    'background',
  );

  const iconColor = useThemeColor(
    {light: iconProps?.lightColor, dark: iconProps?.darkColor},
    'textInputPlaceholer',
  );
  const renderIcon = useCallback(() => {
    if (!leftIcon) {
      return null;
    }
    return (
      <TouchableOpacity
        accessibilityRole="button"
        onPress={onLeftIconPress}
        style={{
          width: 30,
          height: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Ionicons name={leftIcon} size={24} color={iconColor} />
      </TouchableOpacity>
    );
  }, [leftIcon, iconColor, onLeftIconPress]);

  return (
    <View style={[Style.containerDefaultStyle, containerStyle]}>
      {label && (
        <Text style={[Style.textLabelDefaultStyle, textLabelStyle]}>
          {label}
        </Text>
      )}
      <View
        style={[
          Style.inputContainerDefaultStyle,
          {borderColor, backgroundColor},
        ]}>
        {renderIcon()}
        <MaskedTextInput
          {...otherTextInputProps}
          placeholderTextColor={iconColor}
          style={[Style.defaultTextInputStyle, textInputStyle]}
        />
      </View>
    </View>
  );
};

const Style = StyleSheet.create({
  containerDefaultStyle: {
    // paddingHorizontal: Layout.Padding.sm,
  },
  textLabelDefaultStyle: {
    paddingBottom: Layout.Padding.md,
  },
  inputContainerDefaultStyle: {
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Layout.Padding.sm,
  },
  defaultTextInputStyle: {
    paddingHorizontal: Layout.Padding.sm,
    height:Layout.Button.Height
  },
});

export default TextInput;
