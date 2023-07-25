import { STORAGEKEYS } from "./types";

export const storeValue = (variableName: STORAGEKEYS, value: string) => {
  localStorage.setItem(variableName, value);
};

export const fetchStoredValue = (variableName: STORAGEKEYS) => {
  return localStorage.getItem(variableName);
};

export const removeStoredValue = (variableName: STORAGEKEYS) => {
  localStorage.removeItem(variableName);
};
