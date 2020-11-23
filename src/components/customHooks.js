import { useState } from "react";

export const useInput = (initValue) => {
    const [value, setValue] = useState(initValue);
    const handleOnChange = (e) => setValue(e.target.value);

    return { value, handleOnChange };
};