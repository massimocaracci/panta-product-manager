// pages/_app.js
import React from 'react';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../styles/theme';

function MyApp({Component, pageProps}) {
    return (
        <ThemeProvider theme={theme}>
            {/* CssBaseline kickstarts a consistent baseline */}
            <CssBaseline/>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;