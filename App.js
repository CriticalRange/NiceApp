import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import BottomTabBar from './source/screens/BottomTabs/BottomTabBar';
import {CookieProvider} from './source/CookieContext';

const Tab = createMaterialBottomTabNavigator();

const App = navigation => {
  return (
    <NavigationContainer>
      <BottomTabBar />
    </NavigationContainer>
  );
};

export default App;
