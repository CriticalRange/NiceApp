import React, {
  createContext,
  useReducer,
  useEffect,
  useContext,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Importlar

export const CookieContext = createContext();
export const CookieUpgradeContext = createContext();
// Context'ler oluşturarak istediğimiz her yerde kullanabiliriz, daha fazla bilgi edinmek isterseniz index.js dosyasını kontrol edin.

const initialState = {
  cookieAmount: 0,
  clickMultiplier: 1,
  upgradeCost: 10,
  cookieSvgCount: 1,
}; // KURABİYELER ile ilgili her şeyin ilk hali!!!!!

const mainReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COOKIE':
      if (state.cookieSvgCount === 6) {
        state.cookieSvgCount = 0;
      }
      return {
        ...state,
        cookieAmount: state.cookieAmount + state.clickMultiplier,
        cookieSvgCount: state.cookieSvgCount + 1,
        gameData: {
          ...state.gameData,
          cookieAmount: state.cookieAmount + state.clickMultiplier,
          cookieSvgCount: state.cookieSvgCount + 1,
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
  const [isGameDataLoaded, setIsGameDataLoaded] = useState(false);
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
      const saveFile = await AsyncStorage.getItem('@GameData');
      console.log('Alınan game data: ' + saveFile);
      const parsedSaveFile = JSON.parse(saveFile);
      console.log("Parse'lanmış game data: " + parsedSaveFile);
      if (isGameDataLoaded === false) {
        setIsGameDataLoaded(true);
      }
    } catch (error) {
      console.log('Hata! ' + error.message);
    } finally {
      console.log('--- LOAD GAME DATA END ---');
    }
  };
  useEffect(() => {
    console.log('--- LOAD GAME DATA START ---');
    loadGameData();
  }, []);
  //Oyun ilk açıldığındaki yükleme işlevi

  const saveGameData = async () => {
    try {
      if (isGameDataLoaded) {
        const saveFile = await AsyncStorage.getItem('@GameData');
        console.log('(isGameDataLoaded=true) Alınan: ' + saveFile);
        console.log(
          '(isGameDataLoaded=true) Gönderilecek game data: ' + saveFile,
        );
        await AsyncStorage.setItem('@GameData', saveFile);
        console.info('(isGameDataLoaded=true) Dosya başarıyla yazıldı!');
        setGameData(saveFile);
        setIsGameDataLoaded(false);
      } else {
        console.log(
          '(isGameDataLoaded=false) Gönderilecek game data: ' + gameData,
        );
        await AsyncStorage.setItem('@GameData', gameData);
        console.log('(isGameDataLoaded=false) Dosya kaydedildi!');
      }
    } catch (error) {
      console.info('Oyun kaydedilemedi! ' + error.message);
    } finally {
      console.log('--- SAVE GAME DATA END ---');
    }
  };

  useEffect(() => {
    const saveGameDataCounter = setTimeout(() => {
      console.log('--- SAVE GAME DATA START ---');
      saveGameData();
    }, 1000);
    if (isGameDataLoaded) {
      return () => clearTimeout(saveGameDataCounter);
    }
  }, [
    state.cookieAmount,
    state.clickMultiplier,
    state.upgradeCost,
    state.cookieSvgCount,
    state.isGameDataLoaded,
  ]);

  //Oyunda her cookieAmount, clickMultiplier ya da upgradeCost değiştiğindeki o verilerin hepsini kaydetme işlevi

  return (
    <CookieContext.Provider
      value={{
        clickMultiplier: state.clickMultiplier,
        upgradeCost: state.upgradeCost,
        cookieAmount: state.cookieAmount,
        cookieSvgCount: state.cookieSvgCount,
        CookieUpgradeCountHandler,
        cookieClickHandler,
      }}>
      {children}
    </CookieContext.Provider>
  );
};
