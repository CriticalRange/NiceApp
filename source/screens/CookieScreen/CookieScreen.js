import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {CookieContext} from '../../Contexts/CookieContext';
import {screenStyles, cookieScreenStyles} from '../../styles/screenStyles';
import CookieSvgStatus1 from '../../assets/sprites/cookieSprites/cookieSvgStatus1.svg';
import CookieSvgStatus2 from '../../assets/sprites/cookieSprites/cookieSvgStatus2.svg';
import CookieSvgStatus3 from '../../assets/sprites/cookieSprites/cookieSvgStatus3.svg';
import CookieSvgStatus4 from '../../assets/sprites/cookieSprites/cookieSvgStatus4.svg';
import CookieSvgStatus5 from '../../assets/sprites/cookieSprites/cookieSvgStatus5.svg';
import CookieSvgStatus6 from '../../assets/sprites/cookieSprites/cookieSvgStatus6.svg';
const CookieScreen = () => {
  state = {};
  const {cookieAmount, clickMultiplier, cookieSvgCount, cookieClickHandler} =
    useContext(CookieContext);

  return (
    <View style={screenStyles.parentScreenView}>
      <View style={cookieScreenStyles.innerParentCookieAmountReceiver}>
        <Text style={screenStyles.textBoldener}>{cookieAmount}</Text>
      </View>
      <TouchableOpacity onPress={cookieClickHandler}>
        {cookieSvgCount === 1 ? (
          <CookieSvgStatus1
            width={200}
            height={200}
            onPress={cookieClickHandler}
          />
        ) : cookieSvgCount === 2 ? (
          <CookieSvgStatus2
            width={200}
            height={200}
            onPress={cookieClickHandler}
          />
        ) : cookieSvgCount === 3 ? (
          <CookieSvgStatus3
            width={200}
            height={200}
            onPress={cookieClickHandler}
          />
        ) : cookieSvgCount === 4 ? (
          <CookieSvgStatus4
            width={200}
            height={200}
            onPress={cookieClickHandler}
          />
        ) : cookieSvgCount === 5 ? (
          <CookieSvgStatus5
            width={200}
            height={200}
            onPress={cookieClickHandler}
          />
        ) : cookieSvgCount === 6 ? (
          <CookieSvgStatus6
            width={200}
            height={200}
            onPress={cookieClickHandler}
          />
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

export default CookieScreen;
