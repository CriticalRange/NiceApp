import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import BottomTabBar from "./source/screens/BottomTabs/BottomTabBar";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";

const Tab = createMaterialBottomTabNavigator();

const App = (navigation) => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <BottomTabBar />
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
