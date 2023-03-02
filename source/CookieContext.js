import React, {createContext, useReducer} from 'react';

export const CookieContext = createContext();

const cookieState = {cookieAmount: 0};

function cookieReducer(state, action) {
  switch (action.type) {
    case 'CLICK_INCREMENT':
      return {cookieAmount: state.cookieAmount + 1};
    default:
      return state;
  }
}

export const CookieProvider = props => {
  const [state, dispatch] = useReducer(cookieReducer, cookieState);

  return (
    <CookieContext.Provider value={[state, dispatch]}>
      {props.children}
    </CookieContext.Provider>
  );
};
export default CookieContext;
