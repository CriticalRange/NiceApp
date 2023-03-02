import React from 'react';
import {View, Text} from 'react-native';
import screenStyles from '../../styles/screenStyles';

const UpgradeButtonType1 = () => {
  return (
    <View>
      <View style={screenStyles.upgradeBalloon}>
        <Text style={screenStyles.upgrade1Text}>
          Click Upgrader 1 codename E (Currently 0)
        </Text>
      </View>
    </View>
  );
};

export default UpgradeButtonType1;
