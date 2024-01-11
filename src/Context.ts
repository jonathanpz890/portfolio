import React, { createContext } from "react";

export const DarkModeContext = createContext<DarkModeContextType>({
    darkMode: false,
    setDarkMode: () => {}
})

export interface DarkModeContextType {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}