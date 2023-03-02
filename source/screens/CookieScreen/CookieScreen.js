import React, {useCallback, useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCookie} from '@fortawesome/free-solid-svg-icons';
import screenStyles from '../../styles/screenStyles';
import {CookieContext} from '../../CookieContext.js';

function CookieScreen() {
  const [state, dispatch] = useContext(CookieContext);

  const CookieAmountClickHandler = useCallback(() => {
    dispatch({type: 'CLICK_INCREMENT'});
  }, [dispatch]);

  return (
    <View style={screenStyles.parentCookieAmountReceiver}>
      <View style={screenStyles.innerParentCookieAmountReceiver}>
        <Text style={screenStyles.cookieAmountReceiver}>
          {state.cookieAmount}
        </Text>
      </View>
      <TouchableOpacity
        style={screenStyles.cookieButton}
        onPress={CookieAmountClickHandler}>
        <FontAwesomeIcon icon={faCookie} size={200} color="#ad3805" />
      </TouchableOpacity>
    </View>
  );
}

export default CookieScreen;
