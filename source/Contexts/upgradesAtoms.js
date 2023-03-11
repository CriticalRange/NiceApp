import React from "react";
import { selector } from "recoil";
import {
  cookieAmountState,
  clickMultiplierState,
  cookiePiecesUpgradeCostState,
  cookiePiecesState,
  cookiePiecesEnabledState,
} from "./CookieStates";

export const cookiePiecesUpgradeClickSelector = selector({
  key: "cookiePiecesUpgradeClickSelector",
  get: ({ get }) => {
    const cookieAmount = get(cookieAmountState);
    const cookiePiecesUpgradeCost = get(cookiePiecesUpgradeCostState);
    const clickMultiplier = get(clickMultiplierState);
    const cookiePiecesEnabled = get(cookiePiecesEnabledState);
    const cookiePieces = get(cookiePiecesState);
    return {
      cookieAmount,
      cookiePiecesUpgradeCost,
      clickMultiplier,
      cookiePieces,
      cookiePiecesEnabled,
    };
  },
  set: ({ get, set }) => {
    const {
      cookieAmount,
      cookiePiecesUpgradeCost,
      clickMultiplier,
      cookiePieces,
      cookiePiecesEnabled,
    } = get(cookiePiecesUpgradeClickSelector);
    if (get(cookieAmountState) >= get(cookiePiecesUpgradeCostState)) {
      set(cookiePiecesEnabledState, true);
      set(cookiePiecesState, cookiePieces + 1);
      set(cookiePiecesUpgradeCostState, cookiePiecesUpgradeCost + 10);
    } else {
      console.log("You don't have enough cookies!"); // this is added to TODO list
    }
  },
});
