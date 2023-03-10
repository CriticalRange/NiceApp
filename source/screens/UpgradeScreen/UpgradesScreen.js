import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { useRecoilState } from "recoil";
import { cookieAmountState } from "../../Contexts/cookieAtoms";
import { clickMultiplierState, upgradeCostState } from "../../Contexts/upgradesAtoms";
import { screenStyles, cookieScreenStyles, upgradesScreenStyles } from "../../styles/screenStyles";

const UpgradesScreen = () => {
  const [cookieAmount, setCookieAmount] = useRecoilState(cookieAmountState);
  const [upgradeCost, setUpgradeCost] = useRecoilState(upgradeCostState);
  const [clickMultiplier, setClickMultiplier] = useRecoilState(clickMultiplierState);
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
