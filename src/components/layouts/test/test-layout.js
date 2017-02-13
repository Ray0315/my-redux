// src/components/About/index.js
import React, { Component } from 'react';
import './test-layout.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


export default function Main({ children }) {
    {
        // const { classNameName} = this.props;
        return (
            <div>
                <MuiThemeProvider>
                    {children}
                </MuiThemeProvider>
            </div>
        );
    }
}