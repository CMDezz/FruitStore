import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Topbar from './Components/Topbar';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Layout} from '@Layout/Layout';
import SearchBar from './Components/Searchbar';
import {SafeAreaView} from 'react-native-safe-area-context';
import Banner from './Components/Banner';
const HomeScreen = (): JSX.Element => {
  return (
    <KeyboardAwareScrollView style={Style.homeScreen}>
      <SafeAreaView style={Style.homeContainer}>
        <Topbar />
        <SearchBar />
        <Banner />
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

const Style = StyleSheet.create({
  homeScreen: {
    paddingVertical: Layout.Padding.lg,
    paddingHorizontal: Layout.Padding.lg,
    backgroundColor: '#fff',
  },
  homeContainer: {
    flexDirection: 'column',
    gap: Layout.Padding.lg,
  },
});

export default HomeScreen;
