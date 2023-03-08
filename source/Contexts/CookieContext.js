import React, {
  createContext,
  useReducer,
  useEffect,
  useContext,
  useState,
} from 'react';
import RNFS from 'react-native-fs';
// Importlar

export const CookieContext = createContext();
export const CookieUpgradeContext = createContext();
// Bağlamlar oluşturarak istediğimiz her yerde kullanabiliriz, daha fazla bilgi edinmek isterseniz index.js dosyasını kontrol edin.

const initialState = {
  cookieAmount: 0,
  clickMultiplier: 1,
  upgradeCost: 10,
  gameData: {},
  cookieSvgCount: 1,
};
// KURABİYELER ile ilgili her şeyin ilk hali!!!!!

const mainReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COOKIE':
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
        gameData: action.payload,
        ...state,
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
    console.log('svg count: ' + state.cookieSvgCount);
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
      gameData = {
        cookieAmount: state.cookieAmount,
        clickMultiplier: state.clickMultiplier,
        upgradeCost: state.upgradeCost,
        cookieSvgCount: state.cookieSvgCount,
      };
      const saveFileExists = await RNFS.exists(filePath);
      if (saveFileExists) {
        gameData = await RNFS.readFile(filePath, 'utf8');
        console.log('Alınan game data: ' + gameData);
        parsedGameData = JSON.parse(gameData);
        console.log("Parse'lanan game data: " + parsedGameData);
        dispatch({type: 'LOAD_GAME_DATA', payload: parsedGameData});
      } else {
        console.log('Kayıt dosyası bulunamadı!');
      }
    } catch (error) {
      console.error('Hata! ' + error.message);
    }
  };
  useEffect(() => {
    console.log("Load game data useEffect'i çalışıyor");
    loadGameData();
  }, []);
  //Oyun ilk açıldığındaki yükleme işlevi

  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const saveGameData = async () => {
    gameData = {
      cookieAmount: state.cookieAmount,
      clickMultiplier: state.clickMultiplier,
      upgradeCost: state.upgradeCost,
      cookieSvgCount: state.cookieSvgCount,
    };
    try {
      const filePath = `${RNFS.DocumentDirectoryPath}/gameData.json`;
      console.log('İlk game data: ' + JSON.stringify(gameData));
      console.debug("Stringify'lanmış ve gönderilecek game data: " + gameData);
      await RNFS.writeFile(filePath, JSON.stringify(gameData), 'utf8');
      console.info('Dosya başarıyla yazıldı!');
    } catch (error) {
      console.info('Oyun kaydedilemedi! ' + error);
    }
  };
  useEffect(() => {
    const saveGameDataCounter = setTimeout(() => {
      console.log("save game data useEffect'i çalışıyor");
      saveGameData();
    }, 1000);
    return () => clearTimeout(saveGameDataCounter);
  }, [
    state.cookieAmount,
    state.clickMultiplier,
    state.upgradeCost,
    isFirstLoad,
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
