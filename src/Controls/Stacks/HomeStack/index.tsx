import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@Screens/HomeScreen'
import NotifyScreen from '@Screens/NotifyScreen'
export type HomeStackProps={
    Main:{},
    Notify:{},
}

const Stack = createStackNavigator<HomeStackProps>()
const HomeStack = ():JSX.Element=>{

    return <Stack.Navigator
    screenOptions={{
        headerMode: 'screen',
        // headerTintColor: 'white',
        headerStyle: {backgroundColor: '#F6F6F6', borderBottomWidth: 0},
        headerTitleStyle: {fontSize: 22, fontWeight: '400'},
        cardStyle: {backgroundColor: '#F6F6F6'},
        headerTitleAlign: 'center',
      }}
    >
        <Stack.Screen
            name={'Main'}
            component={HomeScreen}
            options={{
                headerShown:false
            }}
        />
        <Stack.Screen
            name={'Notify'}
            component={NotifyScreen}
        />
    </Stack.Navigator>
}

export default HomeStack