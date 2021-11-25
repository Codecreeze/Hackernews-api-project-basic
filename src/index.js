import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from './stateman/store'
import App from './router'
import './app-styles.css'
import {  ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";

// const isDarkModeEnabled = !( window.getComputedStyle(document.body, null).getPropertyValue('background-color') == 'rgb(255, 255, 255)' );
const isDarkModeEnabled = window.localStorage.getItem("darkmode") == 'yes'

let darkThemeAttribs = {}

if(isDarkModeEnabled){
    darkThemeAttribs = {
        primary: {main: '#1E1E1E'},
        typography: {color: '#fff'}
    }
}

const darkTheme = createTheme({
    palette: {
      mode: isDarkModeEnabled ? 'dark': 'light',
      ...darkThemeAttribs
    },
  });

 
ReactDOM.render(<Provider store={store}>
        <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
, document.getElementById("root"))