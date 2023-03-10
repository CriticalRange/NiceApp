import React, { createContext, useContext, useReducer } from "react";
import { cookieAmountState, cookieSvgCountState } from "./cookieAtoms";
import { upgradeCostState, clickMultiplierState } from "./upgradesAtoms";
import { useRecoilState } from "recoil";
//Importlar

export const UpgradesContext = ({ children }) => {
  const [cookieAmount, setCookieAmount] = useRecoilState(cookieAmountState);
  const [upgradeCost, setUpgradeCost] = useRecoilState(upgradeCostState);
  const [clickMultiplier, setClickMultiplier] = useRecoilState(clickMultiplierState);
};
