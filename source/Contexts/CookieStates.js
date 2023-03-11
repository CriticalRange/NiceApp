import React from "react";
import { atom } from "recoil";

export const cookieAmountState = atom({
  key: "cookieAmountState",
  default: 10,
});

export const cookieSvgCountState = atom({
  key: "cookieSvgCountState",
  default: 1,
});

export const cookiePiecesUpgradeCostState = atom({
  key: "cookiePiecesUpgradeCostState",
  default: 10,
});

export const clickMultiplierUpgradeCostState = atom({
  key: "clickMultiplierUpgradeCostState",
  default: 10,
});

export const clickMultiplierState = atom({
  key: "clickMultiplierState",
  default: 1,
});

export const cookiePiecesState = atom({
  key: "cookiePiecesState",
  default: 0,
});

export const cookiePiecesEnabledState = atom({
  key: "cookiePiecesEnabledState",
  default: false,
});
