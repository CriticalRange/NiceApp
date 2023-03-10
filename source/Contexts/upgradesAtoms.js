import React from "react";
import { atom } from "recoil";

export const upgradeCostState = atom({
  key: "upgradeCostState",
  default: 10,
});

export const clickMultiplierState = atom({
  key: "clickMultiplierState",
  default: 10,
});
