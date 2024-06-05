import React, {createContext, useContext, useEffect, useState} from "react";

// createContext: Creates a context object which will be used to provide and consume values in the component tree.
//useContext: A hook that allows components to consume values from a context.
// useEffect: A hook that runs side effects in functional components.
// useState: A hook that adds state management to functional components.

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);
export const ThemeProvider = ({children}) => {
    // ThemeProvider is a functional component that will wrap around parts of the application that need access to the theme.
    // useState initializes the retrieved theme state from localStorage (if it exists) or defaults to 'light'.
    const [theme,setTheme] = useState(
    () => localStorage.getItem('theme') || 'light');

    // When Theme state change, the useEffect Hook switch the data-theme attribute to change theme color.
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        },[theme]);

        //The toggleTheme function is switching the Theme state between values
        const toggleTheme = () => {
            setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light')); 
        };

        return (
            //ThemeProvider returns a [ThemeContext.Provider] component that provides the theme and
            //toggleTheme to its children values [theme, toggleTheme]
            <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
            </ThemeContext.Provider>
        );

};