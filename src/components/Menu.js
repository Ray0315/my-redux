// src/components/About/index.js
import React, { Component } from 'react';
import './Menu.css'
import $ from 'jquery'

export default class Menu extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}


    componentDidMount() {
        $("#leftside-navigation .sub-menu > a").click(function (e) {
            $("#leftside-navigation ul ul").slideUp(); 
            ($(this).next().is(":visible") || $(this).next().slideDown());
            e.stopPropagation();
        });
    }

    render() {
        // const { classNameName} = this.props;
        return (
            <aside className="sidebar">
                <div id="leftside-navigation" className="nano">
                    <ul className="nano-content">
                        <li>
                            <a href="#"><i className="fa fa-dashboard"></i><span>Dashboard</span></a>
                        </li>
                        <li className="sub-menu">
                            <a href="#"><i className="fa fa-cogs"></i><span>UI Elements</span><i className="arrow fa fa-angle-right pull-right"></i></a>
                            <ul>
                                <li><a href="#">Alerts Notifications</a></li>
                                <li><a href="#">Panels</a></li>
                            </ul>
                        </li>
                        <li className="sub-menu">
                            <a href="#"><i className="fa fa-table"></i><span>Tables</span><i className="arrow fa fa-angle-right pull-right"></i></a>
                            <ul>
                                <li><a href="#">Basic Tables</a></li>
                                <li><a href="#">Data Tables</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </aside>
        );
    }
}