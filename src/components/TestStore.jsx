import { atom } from "nanostores";

export const testValue = atom(0);

export const increaseValue = () => {
  testValue.set(testValue.get() + 1);
};
