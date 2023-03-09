import React, {createContext, useContext, useReducer} from 'react';
import {CookieContext, CookieProvider} from './CookieContext';
import {UpgradesContext, UpgradesProvider} from './UpgradesContext';
import {initialCookieState} from './CookieContext';
import {initialUpgradesState} from './UpgradesContext';
import {cookieReducer} from './CookieContext';
import {upgradesReducer} from './UpgradesContext';
// Importlar
export const MainContext = createContext();

export const MainProvider = ({children}) => {
  const CookieScreenContext = useContext(CookieContext);
  const UpgradesScreenContext = useContext(UpgradesContext);
  const [cookieState, cookieDispatch] = useReducer(
    cookieReducer,
    initialCookieState,
  );
  const [upgradesState, upgradesDispatch] = useReducer(
    upgradesReducer,
    initialUpgradesState,
  );
  //getting reducers

  const cookieClickHandler = () => {
    cookieDispatch({type: 'ADD_COOKIE'});
  };
  //Kurabiye tıklama algılayıcı sistemi

  const CookieUpgradeCountHandler = () => {
    if (cookieState.cookieAmount >= upgradesState.upgradeCost) {
      upgradesDispatch({
        type: 'UPGRADE_CLICK',
        upgradeCost: cookieState.upgradeCost,
      });
    }
  };
  //Kurabiye arttırmaları tıklama algılayıcı sistemi

  return (
    <UpgradesProvider>
      <CookieProvider>
        <MainContext.Provider
          value={{
            clickMultiplier: cookieState.clickMultiplier,
            upgradeCost: cookieState.upgradeCost,
            cookieAmount: cookieState.cookieAmount,
            cookieSvgCount: cookieState.cookieSvgCount,
            cookieClickHandler,
          }}>
          {children}
        </MainContext.Provider>
      </CookieProvider>
    </UpgradesProvider>
  );
};
