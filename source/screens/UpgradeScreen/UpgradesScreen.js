import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import CookieContext from '../../CookieContext';
import UpgradeButtonType1 from './UpgradeButtonType1';

const UpgradesScreen = () => {
  const [state, dispatch] = useContext(CookieContext);

  return (
    <View>
      <UpgradeButtonType1 />
    </View>
  );
};

export default UpgradesScreen;
