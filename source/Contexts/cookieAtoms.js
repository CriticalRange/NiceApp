import React from "react";
import { selector } from "recoil";
import {
  cookieAmountState,
  cookieSvgCountState,
  clickMultiplierState,
  cookiePiecesState,
  cookiePiecesEnabledState,
  cookiePiecesUpgradeCostState,
} from "./CookieStates";

export const cookieClickSelector = selector({
  key: "cookieClickSelector",
  get: ({ get }) => {
    const cookieSvgCount = get(cookieSvgCountState);
    const cookieAmount = get(cookieAmountState);
    const clickMultiplier = get(clickMultiplierState);
    const cookiePieces = get(cookiePiecesState);
    const cookiePiecesEnabled = get(cookiePiecesEnabledState);
    return {
      cookieSvgCount,
      cookieAmount,
      clickMultiplier,
      cookiePieces,
      cookiePiecesEnabled,
    };
  },
  set: ({ get, set }) => {
    const { cookieSvgCount, cookieAmount, clickMultiplier, cookiePieces, cookiePiecesEnabled } =
      get(cookieClickSelector);
    console.log("Svg count: " + cookieSvgCount);

    if (get(cookiePiecesEnabledState)) {
      set(cookieAmountState, cookieAmount + cookiePieces);
      set(cookieSvgCountState, cookieSvgCount + cookiePieces);
    } else {
      set(cookieSvgCountState, cookieSvgCount + 1);
    }

    if (get(cookieSvgCountState) > 5) {
      set(cookieSvgCountState, 1);
      if (get(cookiePiecesEnabledState)) {
        set(cookieAmountState, cookieAmount);
      } else {
        set(cookieAmountState, cookieAmount + clickMultiplier);
      }
      if (cookiePiecesEnabled) {
        set(cookieAmountState, cookieAmount + clickMultiplier + cookiePieces);
      }
    }
  },
});
