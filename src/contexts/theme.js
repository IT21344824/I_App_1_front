import { createContext , useContext } from "react";

//create context
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},

});

//
export const ThemeProvider = ThemeContext.Provider;

//custom useContext hook
export default function useTheme() {
    return useContext(ThemeContext);
}