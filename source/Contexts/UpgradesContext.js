import React, {createContext, useContext, useReducer} from 'react';
import {
  CookieContext,
  cookieReducer,
  initialCookieState,
} from './CookieContext';
//Importlar

export const initialUpgradesState = {
  clickMultiplier: 1,
  upgradeCost: 10,
};

export const UpgradesContext = createContext();
// Context oluşturarak istediğimiz her yerde kullanabiliriz, daha fazla bilgi edinmek isterseniz index.js dosyasını kontrol edin.

export const upgradesReducer = (cookieState, upgradesState, action) => {
  switch (action.type) {
    case 'UPGRADE_CLICK':
      return {
        ...upgradesState,
        clickMultiplier: upgradesState.clickMultiplier * 2,
        upgradeCost: upgradesState.upgradeCost * 2,
        cookieAmount: cookieState.cookieAmount - upgradesState.upgradeCost,
      };
  }
};

export const UpgradesProvider = ({children}) => {
  const [cookieState, cookieDispatch] = useReducer(
    cookieReducer,
    initialCookieState,
  );
  const [upgradesState, upgradesDispatch] = useReducer(
    upgradesReducer,
    initialUpgradesState,
  );

  return (
    <UpgradesContext.Provider
      value={{
        clickMultiplier: upgradesState.clickMultiplier,
        upgradeCost: upgradesState.upgradeCost,
        cookieAmount: cookieState.cookieAmount,
      }}>
      {children}
    </UpgradesContext.Provider>
  );
};
