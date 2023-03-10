import React from "react";
import { atom, selector } from "recoil";
import { upgradeCostState } from "./upgradesAtoms";

export const cookieAmountState = atom({
  key: "cookieAmountState",
  default: 0,
});

export const cookieSvgCountState = atom({
  key: "cookieSvgCountState",
  default: 1,
});

export const cookieClickSelector = selector({
  key: "cookieClickSelector",
  get: ({ get }) => {
    const cookieSvgCount = get(cookieSvgCountState);
    const cookieAmount = get(cookieAmountState);
    const upgradeCost = get(upgradeCostState);

    return () => {
      if (cookieSvgCount > 6) {
        set(cookieSvgCount, 1);
      }
      set(cookieAmount, cookieAmount + upgradeCost);
    };
  },
  set: ({ get, set }, newValue) => {
    const cookieSvgCount = get(cookieSvgCountState);
    if (newValue) {
      if (cookieSvgCount > 6) {
        set(cookieSvgCountState, 1);
      }
      set(cookieAmountState, get(cookieAmountState) + get(upgradeCostState));
    }
  },
});
