import React, {
  createContext,
  useReducer,
  useEffect,
  useContext,
  useState,
} from 'react';
import RNFS from 'react-native-fs';
import {logger} from 'react-native-logs';
// Importlar

const log = logger.createLogger({
  transportOptions: {
    colors: {
      success: 'greenBright',
      info: 'blueBright',
      warn: 'yellowBright',
      error: 'redBright',
      debug: 'white',
    },
  },
});
// Havalı debugging

export const CookieContext = createContext();
export const CookieUpgradeContext = createContext();
// Bağlamlar oluşturarak istediğimiz her yerde kullanabiliriz, daha fazla bilgi edinmek isterseniz index.js dosyasını kontrol edin.

const initialState = {
  cookieAmount: 0,
  clickMultiplier: 1,
  upgradeCost: 10,
  gameData: {},
};
// KURABİYELER ile ilgili her şeyin ilk hali!!!!!

const mainReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COOKIE':
      return {
        ...state,
        cookieAmount: state.cookieAmount + state.clickMultiplier,
        gameData: {
          ...state.gameData,
          cookieAmount: state.cookieAmount + state.clickMultiplier,
        },
      }; //Kurabiye miktarına 1 kurabiye (veya Tıklama Çarpanı yükseltmesinden kazanılan yüzde kadar kurabiye) ekleyen fonksiyon
    case 'UPGRADE_CLICK':
      return {
        ...state,
        clickMultiplier: state.clickMultiplier * 2,
        upgradeCost: state.upgradeCost * 2,
        cookieAmount: state.cookieAmount - state.upgradeCost,
        gameData: {
          ...state.gameData,
          clickMultiplier: state.clickMultiplier * 2,
          upgradeCost: state.upgradeCost * 2,
          cookieAmount: state.cookieAmount - state.upgradeCost,
        },
      };
    case 'LOAD_GAME_DATA':
      return {
        ...state,
        gameData: action.payload,
      };
    default:
      return state;
  }
};
// Kurabiye reducer'ı, bütün eylemler burada yapılacaktır.

export const CookieProvider = ({children}) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  const filePath = `${RNFS.DocumentDirectoryPath}/gameData.json`;

  const cookieClickHandler = () => {
    dispatch({type: 'ADD_COOKIE'});
  };
  // Kurabiyeye tıklama handler'ı

  const CookieUpgradeCountHandler = () => {
    if (state.cookieAmount >= state.upgradeCost) {
      dispatch({type: 'UPGRADE_CLICK', upgradeCost: state.upgradeCost});
    }
  };
  // İlk yükseltmeye tıklaması handler'ı (henüz bir isim bulamadım).

  const loadGameData = async () => {
    try {
      const gameData = await RNFS.readFile(filePath, 'utf8');
      dispatch({type: 'LOAD_GAME_DATA', payload: gameData});
      console.debug('Dosyadan alınan veriler: ' + gameData);
    } catch (error) {
      console.error('Hata! ' + error.message);
    }
  };
  useEffect(() => {
    loadGameData();
  }, []);
  //Oyun ilk açıldığındaki yükleme işlevi

  const saveGameData = async () => {
    const gameData = {
      cookieAmount: state.cookieAmount,
      clickMultiplier: state.clickMultiplier,
      upgradeCost: state.upgradeCost,
    };
    try {
      parsedGameData = JSON.stringify(gameData);
      console.debug('Kaydedilecek veriler: ' + JSON.stringify(gameData));
      await RNFS.writeFile(filePath, JSON.stringify(gameData), 'utf8');
      console.success('Oyun başarıyla kaydedildi!');
    } catch (error) {
      console.info('Oyun kaydedilemedi! ' + error.message);
    }
  };
  useEffect(() => {
    saveGameData();
  }, [state.cookieAmount, state.clickMultiplier, state.upgradeCost]);
  //Oyunda her cookieAmount, clickMultiplier ya da upgradeCost değiştiğindeki o verilerin hepsini kaydetme işlevi

  return (
    <CookieContext.Provider
      value={{
        clickMultiplier: state.clickMultiplier,
        upgradeCost: state.upgradeCost,
        cookieAmount: state.cookieAmount,
        CookieUpgradeCountHandler,
        cookieClickHandler,
      }}>
      {children}
    </CookieContext.Provider>
  );
};
