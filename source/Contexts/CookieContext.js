import React, {createContext, useReducer, useContext} from 'react';
// Importlar

export const initialCookieState = {
  cookieAmount: 0,
  cookieSvgCount: 1,
}; // KURABİYELER ile ilgili her şeyin ilk hali!!!!!

export const CookieContext = createContext();
// Context oluşturarak istediğimiz her yerde kullanabiliriz, daha fazla bilgi edinmek isterseniz index.js dosyasını kontrol edin.

// Kurabiye reducer'ı, bütün eylemler burada yapılacaktır.

export const cookieReducer = (cookieState, action) => {
  switch (action.type) {
    case 'ADD_COOKIE':
      if (cookieState.cookieSvgCount === 6) {
        cookieState.cookieSvgCount = 0;
      }
      return {
        ...cookieState,
        cookieAmount: cookieState.cookieAmount + 1,
        cookieSvgCount: cookieState.cookieSvgCount + 1,
      }; //Kurabiye miktarına 1 kurabiye (veya Tıklama Çarpanı yükseltmesinden kazanılan yüzde kadar kurabiye + 1) ekleyen fonksiyon
    //Upgrade reducer'ı
  }
};

export const CookieProvider = ({children}) => {
  const [cookieState, cookieDispatch] = useReducer(
    cookieReducer,
    initialCookieState,
  );

  return (
    <CookieContext.Provider
      value={{
        cookieAmount: cookieState.cookieAmount,
        cookieSvgCount: cookieState.cookieSvgCount,
      }}>
      {children}
    </CookieContext.Provider>
  );
};
