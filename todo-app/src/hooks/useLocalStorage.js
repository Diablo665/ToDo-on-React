import { useState } from "react";

const useLocalStorage = (key, valueDefault) => {

    const [localStorageValue, setLocalStorageValue] = useState(() => {

        const value = localStorage.getItem(key);

        if(value){
            return JSON.parse(value); 
        }

        else{
            localStorage.setItem(key, JSON.stringify(valueDefault));
            return valueDefault;
        }

    })

    const setValue = (value) => {
        try {

          const valueToStore = value instanceof Function ? value(localStorageValue) : value;
          setLocalStorageValue(valueToStore);

          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {

          console.error(error);

        }
      };

    return [localStorageValue, setValue]
}

export default useLocalStorage;