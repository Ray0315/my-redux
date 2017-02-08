// src/components/About/index.js
import React, { Component } from 'react';
import './main.css'
import Menu from '../utils/Menu/Menu'

export default function Main({ children }) {
    {
        // const { classNameName} = this.props;
        return (
            <div className="grid-container">
                <div className="grid-item item-track ">
                    <ul className="navigation">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="grid-item item-cell">
                    <div><Menu /></div>
                </div>
                <div className="grid-item item-area">
                    <div style={{ marginTop: '1.5em' }}>{children}</div>
                </div>
            </div>
        );
    }
}