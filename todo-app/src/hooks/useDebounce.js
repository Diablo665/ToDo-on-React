import { useState, useEffect } from "react";

const useDebounce = (value, delay) => {
    const [searchValue, setSearchValue] = useState(value);

    useEffect(() => {
        const search = setTimeout(() => {
            setSearchValue(value);
        }, delay);

        return () => {
            clearTimeout(search);
        };
    }, [value, delay]);

    return searchValue;
};

export default useDebounce