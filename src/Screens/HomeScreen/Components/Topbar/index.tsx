import {Layout} from '@Layout/Layout';
import React from 'react';
import {View, StyleSheet, Image,TextStyle,StyleProp,TouchableOpacity} from 'react-native';
import Text from '@Controls/Common/Text'
import Ionicons from 'react-native-vector-icons/Ionicons';
const UserImage = require('@Static/Image/UserImage.png');

const Topbar = (): JSX.Element => {
  return (
    <View style={Style.topBar}>
      {/* text */}
      <View style={Style.titleText}>
        <Text
        preset='Title'
          >
          Hello, Nancy Lius
        </Text>
        <Text >Good morning</Text>
      </View>

      {/* notify icon */}
      <TouchableOpacity>
        <Ionicons name="notifications-outline" size={25}  />
      </TouchableOpacity>

      {/* user avatar */}
      <TouchableOpacity>
        <Image source={UserImage} style={Style.userImage} />
      </TouchableOpacity>
    </View>
  );
};

const Style = StyleSheet.create({
  topBar: {
    flex: 1,
    flexDirection: 'row',
    gap: Layout.Padding.lg,
    alignItems:'center'
  },
  titleText: {
    flex: 1,
  },
  titleHeading:{
    fontSize: Layout.Text.Size.lg,
    fontWeight: Layout.Text.Weight.bold,
    color:'#000'
  } as TextStyle,
  titleDescripting:{
  } as TextStyle,
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 30 / 2,
  },
});

export default Topbar;
