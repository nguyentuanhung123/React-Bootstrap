import React, { createContext, useContext, useState, useEffect } from "react";

export const ToggleContext = createContext();

const ToggleProvider = ({ children }) => {

    //toggle state
    const [toggle, setToggle] = useState(false);

    const Toggle = () => {
        setToggle(!toggle)
    }

    return (
        <ToggleContext.Provider value={{ toggle, setToggle, Toggle }}>
            {children}
        </ToggleContext.Provider>
    )
}

export default ToggleProvider;