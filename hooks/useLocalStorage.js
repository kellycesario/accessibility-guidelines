import { useState, useEffect } from "react";

const getStorageData = (keyName, defaultValue) => {
  if (typeof window !== "undefined") {
    return defaultValue;
  }
};

export const useLocalStorage = (keyName, initialValue) => {
  const [value, setValue] = useState(() => {
    return getStorageData(keyName, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(keyName, JSON.stringify(value));
  }, [keyName, value]);

  return [value, setValue];
};
