import React, { useState, useMemo, createContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const ColorModeContext = createContext();

function ToggleColorMode({ children }) {
    const [mode, setMode] = useState('light');

    const theme = useMemo(() => createTheme({
        palette: {
            mode,
        },
    }), [mode]);

    const toggleColorMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <ColorModeContext.Provider value={{ mode, setMode, toggleColorMode }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default ToggleColorMode;