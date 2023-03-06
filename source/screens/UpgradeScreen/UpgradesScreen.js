import React, {useContext} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {CookieContext} from '../../Contexts/CookieContext';
import {
  screenStyles,
  cookieScreenStyles,
  upgradesScreenStyles,
} from '../../styles/screenStyles';

const UpgradesScreen = () => {
  const {
    cookieAmount,
    clickMultiplier,
    CookieUpgradeCountHandler,
    upgradeCost,
  } = useContext(CookieContext);

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
