import React from 'react';
import {StyleSheet} from 'react-native';

export const screenStyles = StyleSheet.create({
  parentScreenView: {
    paddingTop: 35,
    alignItems: 'center',
  },
  convenientScreenBalloon: {
    margin: 10,
    padding: 20,
    borderWidth: 3,
    borderRadius: 15,
    borderColor: 'black',
  },
  textBoldener: {
    fontSize: 25,
    color: 'black',
  },
});

export const cookieScreenStyles = StyleSheet.create({
  innerParentCookieAmountReceiver: {
    paddingBottom: 25,
  },
});

export const upgradesScreenStyles = StyleSheet.create({});

export const optionsScreenStyles = StyleSheet.create({
  themeSwitcher: {
    paddingTop: 50,
  },
});
