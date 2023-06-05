import { Layout } from '@Layout/Layout'
import React from 'react'
import {Text as BaseText,View,TextStyle} from 'react-native'
import { ThemeProps } from './Themes'
import { useThemeColor } from './Themes'
const presets = {
    Heading: {
        fontFamily:'Inter',
        fontSize: Layout.Text.Size.xl,
        fontWeight:Layout.Text.Weight.bold ,
        letterSpacing: 1,
        lineHeight: 36,
    },
    Normal:{
        fontFamily:'Inter',
        fontSize: Layout.Text.Size.md,
        fontWeight:Layout.Text.Weight.normal ,
        letterSpacing: 0.3,
        lineHeight: 20,
    },
    Title:{
        fontFamily:'Inter',
        fontSize: Layout.Text.Size.lg,
        fontWeight:Layout.Text.Weight.bold ,
        letterSpacing: 0.3,
        lineHeight: 24,
    }
}

type Presets = keyof typeof presets;

type TextProps = ThemeProps &
BaseText['props'] &
 {
    preset?:Presets
}



const Text =(props:TextProps):JSX.Element=>{
    const { preset = 'Normal',lightColor,darkColor,style,...otherProps} = props;
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
    const textStyle = [presets[preset], { color },style] as TextStyle;

    return <BaseText  style={textStyle} {...otherProps}/>
}

export default Text