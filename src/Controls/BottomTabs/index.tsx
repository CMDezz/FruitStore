import React,{useState} from 'react';

import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Text,TouchableOpacity,StyleSheet,Pressable} from 'react-native';

//import stack
import HomeStack from '../Stacks/HomeStack';
import OrderStack from '../Stacks/OrderStack';
import CartStack from '../Stacks/CartStack';
import FavoriteStack from '../Stacks/FavoriteStack';
import PersonalStack from '../Stacks/PersonalStack';
import { COLOR } from '../../Styles/Common';
import { useIsFocused } from '@react-navigation/native';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { SvgUri } from 'react-native-svg';

const Tabs = createBottomTabNavigator();

const CustomPresableButton = (props:BottomTabBarButtonProps):JSX.Element=>{
  const isFocused = useIsFocused();

  return <Pressable {...props} style={{...Styles.CartButton,backgroundColor:isFocused?COLOR.Primary[0]:COLOR.Primary[1]}}>
      <SvgUri
        uri={require('./../../Static/Svg/CartStackBackground.svg')}
        width="100"
        height="100"
        // fill="red" // Change the fill color here
      />
  </Pressable>
}

const BottomTabs = (): JSX.Element => {

  const [pressedCart,setPressedCart] = useState(false)
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => {
            return <Ionicons name="home" size={size} color={focused?COLOR.Primary[1]:COLOR.Neutral[0]} />
          },
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="OrderStack"
        component={OrderStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => {
            return <Ionicons name="albums" size={size} color={focused?COLOR.Primary[1]:COLOR.Neutral[0]} />
          },
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="CartStack"
        component={CartStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => {
            return <Ionicons name="cart" size={size} color={'#fff'} />
          },
          tabBarButton:(props)=>{
            return <CustomPresableButton {...props}/>
            // return <Pressable {...props}  style={{...Styles.CartButton,backgroundColor:isFocused?COLOR.Primary[0]:COLOR.Primary[1]}} />
          },
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="FavoriteStack"
        component={FavoriteStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => {
            return <Ionicons name="heart" size={size} color={focused?COLOR.Primary[1]:COLOR.Neutral[0]} />
          },
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="PersonalStack"
        component={PersonalStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => {
            return <Ionicons name="happy" size={size} color={focused?COLOR.Primary[1]:COLOR.Neutral[0]} />
          },
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabs;


const Styles = StyleSheet.create({
  CartButton:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    backgroundColor: 'black',
  }
})
