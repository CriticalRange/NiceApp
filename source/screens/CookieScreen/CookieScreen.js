import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {CookieContext} from '../../Contexts/CookieContext';
import {screenStyles, cookieScreenStyles} from '../../styles/screenStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCookie} from '@fortawesome/free-solid-svg-icons';

const CookieScreen = () => {
  const {cookieAmount, clickMultiplier, cookieClickHandler} =
    useContext(CookieContext);

  return (
    <View style={screenStyles.parentScreenView}>
      <View style={cookieScreenStyles.innerParentCookieAmountReceiver}>
        <Text style={screenStyles.textBoldener}>{cookieAmount}</Text>
      </View>
      <TouchableOpacity onPress={cookieClickHandler}>
        <FontAwesomeIcon icon={faCookie} size={200} color="#782606" />
      </TouchableOpacity>
    </View>
  );
};

export default CookieScreen;
