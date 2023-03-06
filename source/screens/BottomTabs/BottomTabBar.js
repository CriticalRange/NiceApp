import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {faCookie, faArrowUp, faGear} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
import CookieScreen from '../CookieScreen/CookieScreen';
import UpgradesScreen from '../UpgradeScreen/UpgradesScreen';
import OptionsScreen from '../OptionsScreen/OptionsScreen';

library.add(faCookie, faArrowUp, faGear);
const Tab = createMaterialBottomTabNavigator();

const BottomTabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Cookies') {
            iconName = focused ? 'fa-cookie' : 'fa-cookie';
          } else if (route.name === 'Upgrades') {
            iconName = focused ? 'fa-arrow-up' : 'fa-arrow-up';
          } else if (route.name === 'Options') {
            iconName = focused ? 'fa-gear' : 'fa-gear';
          }
          return (
            <FontAwesomeIcon icon={iconName} color="#782606" size={size} />
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Cookies" component={CookieScreen} />
      <Tab.Screen name="Upgrades" component={UpgradesScreen} />
      <Tab.Screen name="Options" component={OptionsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabBar;
