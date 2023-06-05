import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import BannerSvg from '@Static/Svg/BannerBackground.svg';
import {COLOR} from '@Layout/Color';
import {Layout} from '@Layout/Layout';
import { Svg, Defs, LinearGradient, Stop, Image } from 'react-native-svg';

// const YourComponent = () => {
//     return (
//       <Svg width="100%" height="100%" viewBox="0 0 100 100">
//         <Defs>
//           <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//             <Stop offset="0%" stopColor="red" />
//             <Stop offset="100%" stopColor="blue" />
//           </LinearGradient>
//         </Defs>
//         <Image
//           href={require('@Static')}
//           width="100%"
//           height="100%"
//           preserveAspectRatio="xMidYMid slice"
//           clipPath="url(#clip)"
//           fill="url(#gradient)"
//         />
//       </Svg>
//     );
//   };
const BannerItem = (): JSX.Element => {
  return (
    <Pressable style={Style.containerStyle}>
      <View style={Style.bannerContainerDefaultStyle}>
        <BannerSvg
        //   fill={'linear-gradient(#FFB08E, #F3743D)'}
        start-color={'#DBE0FB'}
        stop-color={'#F3743D'}
          width={'100%'}
          height="100%"
          style={{flex: 1, padding: 0, margin: 0}}
          preserveAspectRatio="none"
          />
      </View>
      <Text>This is Banner</Text>
    </Pressable>
  );
};

const Style = StyleSheet.create({
  bannerContainerDefaultStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 150,
  },
});

export default BannerItem;
