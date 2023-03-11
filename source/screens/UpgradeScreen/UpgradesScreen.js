import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { useRecoilCallback, useRecoilValue } from "recoil";
import {
  cookieAmountState,
  clickMultiplierState,
  cookiePiecesUpgradeCostState,
  cookiePiecesState,
  cookiePiecesEnabledState,
} from "../../Contexts/CookieStates";
import { screenStyles, cookieScreenStyles, upgradesScreenStyles } from "../../styles/screenStyles";
import { cookiePiecesUpgradeClickSelector } from "../../Contexts/upgradesAtoms";

const UpgradesScreen = () => {
  const cookiePiecesUpgradeClickHandler = useRecoilCallback(({ set }) => {
    return () => {
      set(cookiePiecesUpgradeClickSelector, true);
    };
  });

  const cookieAmount = useRecoilValue(cookieAmountState);
  const cookiePiecesUpgradeCost = useRecoilValue(cookiePiecesUpgradeCostState);
  const clickMultiplier = useRecoilValue(clickMultiplierState);
  const cookiePieces = useRecoilValue(cookiePiecesState);
  const cookiePiecesEnabled = useRecoilValue(cookiePiecesEnabledState);
  return (
    <View style={screenStyles.parentScreenView}>
      <View style={cookieScreenStyles.innerParentCookieAmountReceiver}>
        <Text style={screenStyles.textBoldener}>{cookieAmount}</Text>
      </View>
      <View style={screenStyles.convenientScreenBalloon}>
        <TouchableOpacity onPress={cookiePiecesUpgradeClickHandler}>
          <Text style={screenStyles.textBoldener}>
            Cookie Pieces! (Currently {cookiePiecesEnabled}) Cost: {cookiePiecesUpgradeCost} cookies
          </Text>
        </TouchableOpacity>
      </View>
      <View style={screenStyles.convenientScreenBalloon}>
        <TouchableOpacity onPress={cookiePiecesUpgradeClickHandler}>
          <Text style={screenStyles.textBoldener}>
            Click Multiplier (Currently {clickMultiplier}) Cost: {cookiePiecesUpgradeCost} cookies
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpgradesScreen;
