import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { screenStyles, cookieScreenStyles, optionsScreenStyles } from "../../styles/screenStyles";
import { cookieAmountState } from "../../Contexts/cookieAtoms";

const OptionsScreen = () => {
  const [cookieAmount, setCookieAmount] = useRecoileState(cookieAmountState);
  return (
    <View style={screenStyles.parentScreenView}>
      <View style={cookieScreenStyles.innerParentCookieAmountReceiver}>
        <Text style={screenStyles.textBoldener}>{cookieAmount}</Text>
      </View>
      <View style={screenStyles.convenientScreenBalloon}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faLightbulb} size={50} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OptionsScreen;
