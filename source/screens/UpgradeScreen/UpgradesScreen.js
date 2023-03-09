import React, {useContext} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {MainContext} from '../../Contexts/MainContext';
import {
  screenStyles,
  cookieScreenStyles,
  upgradesScreenStyles,
} from '../../styles/screenStyles';

const UpgradesScreen = () => {
  const {
    cookieAmount,
    clickMultiplier,
    upgradeCost,
    CookieUpgradeCountHandler,
  } = useContext(MainContext);

  return (
    <View style={screenStyles.parentScreenView}>
      <View style={cookieScreenStyles.innerParentCookieAmountReceiver}>
        <Text style={screenStyles.textBoldener}>{cookieAmount}</Text>
      </View>
      <View style={screenStyles.convenientScreenBalloon}>
        <TouchableOpacity onPress={CookieUpgradeCountHandler}>
          <Text style={screenStyles.textBoldener}>
            Click Multiplier (Currently {clickMultiplier}) {upgradeCost} cookies
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpgradesScreen;
