import React from "react";
import { cookieAmountState, cookieSvgCountState } from "./cookieAtoms";
import { useRecoilState, useSetRecoilState } from "recoil";
import { upgradeCostState } from "./upgradesAtoms";
// Importlar

export const CookieContext = () => {
  const [cookieAmount, setCookieAmount] = useRecoilState(cookieAmountState);
  const [cookieSvgCount, setCookieSvgCount] = useRecoilState(cookieSvgCountState);
  const [upgradeCost, setUpgradeCost] = useRecoilState(upgradeCostState);

  const cookieClickHandler = () => {
    console.log("CookieClickHandler used");
    if (cookieSvgCount > 6) {
      setCookieSvgCount(1);
      setCookieAmount(cookieAmount + upgradeCost);
      setCookieSvgCount(svgMover);
    }
  };
};
