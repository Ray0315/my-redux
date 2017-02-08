// src/components/About/index.js
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router'

import './Menu.css'
import $ from 'jquery'

export default class Menu extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}

    componentDidMount() {
        $.sidebarMenu = function (menu) {
            var animationSpeed = 300;

            $(menu).on('click', 'li a', function (e) {
                var $this = $(this);
                var checkElement = $this.next();

                if (checkElement.is('.treeview-menu') && checkElement.is(':visible')) {
                    checkElement.slideUp(animationSpeed, function () {
                        checkElement.removeClass('menu-open');
                    });
                    checkElement.parent("li").removeClass("active");
                }

                //If the menu is not visible
                else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
                    //Get the parent menu
                    var parent = $this.parents('ul').first();
                    //Close all open menus within the parent
                    var ul = parent.find('ul:visible').slideUp(animationSpeed);
                    //Remove the menu-open class from the parent
                    ul.removeClass('menu-open');
                    //Get the parent li
                    var parent_li = $this.parent("li");

                    //Open the target menu and add the menu-open class
                    checkElement.slideDown(animationSpeed, function () {
                        //Add the class active to the parent li
                        checkElement.addClass('menu-open');
                        parent.find('li.active').removeClass('active');
                        parent_li.addClass('active');
                    });
                }
                //if this isn't a link, prevent the page from being redirected
                if (checkElement.is('.treeview-menu')) {
                    e.preventDefault();
                }
            });
        }

        $.sidebarMenu($('.sidebar-menu'))
    }

    render() {
        // const { classNameNameName} = this.props;
        return (
            <section style={{ "width": "200px" }}>
                <ul className="sidebar-menu">
                    <li className="header">MAIN NAVIGATION</li>
                    <li className="treeview">
                        <a href="#">
                            <i className="fa fa-dashboard"></i> <span>Dashboard</span> <i className="fa fa-angle-left pull-right"></i>
                        </a>
                        <ul className="treeview-menu">
                            <li><Link to="/home"><i className="fa fa-circle-o"></i> Home</Link></li>
                            <li><Link to="/foo"><i className="fa fa-circle-o"></i> Foo</Link></li>
                            <li><Link to="/bar"><i className="fa fa-circle-o"></i> Bar</Link></li>
                            <li><Link to="/test"><i className="fa fa-circle-o"></i> Test</Link></li>
                            <li><Link to="/ajax"><i className="fa fa-circle-o"></i> Ajax</Link></li>
                            <li><Link to="/userInfo"><i className="fa fa-circle-o"></i> UserInfo</Link></li>
                        </ul>
                    </li>
                    <li className="treeview">
                        <a href="#">
                            <i className="fa fa-files-o"></i>
                            <span>Layout Options</span>
                            <span className="label label-primary pull-right">4</span>
                        </a>
                        <ul className="treeview-menu" style={{ "display": "none" }}>
                            <li><a href="#"><i className="fa fa-circle-o"></i> Top Navigation</a></li>
                            <li><a href="#"><i className="fa fa-circle-o"></i> Boxed</a></li>
                            <li><a href="#"><i className="fa fa-circle-o"></i> Fixed</a></li>
                            <li className=""><a href="#"><i className="fa fa-circle-o"></i> Collapsed Sidebar</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-th"></i> <span>Widgets</span>
                            <small className="label pull-right label-info">new</small>
                        </a>
                    </li>
                    <li className="treeview">
                        <a href="#">
                            <i className="fa fa-pie-chart"></i>
                            <span>Charts</span>
                            <i className="fa fa-angle-left pull-right"></i>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="#"><i className="fa fa-circle-o"></i> ChartJS</a></li>
                            <li><a href="#"><i className="fa fa-circle-o"></i> Morris</a></li>
                            <li><a href="#"><i className="fa fa-circle-o"></i> Flot</a></li>
                            <li><a href="#"><i className="fa fa-circle-o"></i> Inline charts</a></li>
                        </ul>
                    </li>
                    <li className="treeview">
                        <a href="#">
                            <i className="fa fa-laptop"></i>
                            <span>UI Elements</span>
                            <i className="fa fa-angle-left pull-right"></i>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="#"><i className="fa fa-circle-o"></i> General</a></li>
                            <li><a href="#"><i className="fa fa-circle-o"></i> Icons</a></li>
                            <li><a href="#"><i className="fa fa-circle-o"></i> Buttons</a></li>
                            <li><a href="#"><i className="fa fa-circle-o"></i> Sliders</a></li>
                            <li><a href="#"><i className="fa fa-circle-o"></i> Timeline</a></li>
                            <li><a href="#"><i className="fa fa-circle-o"></i> Modals</a></li>
                        </ul>
                    </li>
                    <li className="treeview">
                        <a href="#">
                            <i className="fa fa-edit"></i> <span>Forms</span>
                            <i className="fa fa-angle-left pull-right"></i>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="#"><i className="fa fa-circle-o"></i> General Elements</a></li>
                            <li><a href="#"><i className="fa fa-circle-o"></i> Advanced Elements</a></li>
                            <li><a href="#"><i className="fa fa-circle-o"></i> Editors</a></li>
                        </ul>
                    </li>
                    <li className="treeview">
                        <a href="#">
                            <i className="fa fa-table"></i> <span>Tables</span>
                            <i className="fa fa-angle-left pull-right"></i>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="#"><i className="fa fa-circle-o"></i> Simple tables</a></li>
                            <li><a href="#"><i className="fa fa-circle-o"></i> Data tables</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-calendar"></i> <span>Calendar</span>
                            <small className="label pull-right label-danger">3</small>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-envelope"></i> <span>Mailbox</span>
                            <small className="label pull-right label-warning">12</small>
                        </a>
                    </li>
                    <li className="treeview">
                        <a href="#">
                            <i className="fa fa-folder"></i> <span>Examples</span>
                            <i className="fa fa-angle-left pull-right"></i>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="#"><i className="fa fa-circle-o"></i> Invoice</a></li>
                            <li><a href="#"><i className="fa fa-circle-o"></i> Profile</a></li>
                            <li><a href="#"><i className="fa fa-circle-o"></i> Login</a></li>
                            <li><a href="#"><i className="fa fa-circle-o"></i> Register</a></li>
                            <li><a href="#"><i className="fa fa-circle-o"></i> Lockscreen</a></li>
                            <li><a href="#"><i className="fa fa-circle-o"></i> 404 Error</a></li>
                            <li><a href="#"><i className="fa fa-circle-o"></i> 500 Error</a></li>
                            <li><a href="#"><i className="fa fa-circle-o"></i> Blank Page</a></li>
                            <li><a href="#"><i className="fa fa-circle-o"></i> Pace Page</a></li>
                        </ul>
                    </li>
                    <li className="treeview">
                        <a href="#">
                            <i className="fa fa-share"></i> <span>Multilevel</span>
                            <i className="fa fa-angle-left pull-right"></i>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="#"><i className="fa fa-circle-o"></i> Level One</a></li>
                            <li>
                                <a href="#"><i className="fa fa-circle-o"></i> Level One <i className="fa fa-angle-left pull-right"></i></a>
                                <ul className="treeview-menu">
                                    <li><a href="#"><i className="fa fa-circle-o"></i> Level Two</a></li>
                                    <li>
                                        <a href="#"><i className="fa fa-circle-o"></i> Level Two <i className="fa fa-angle-left pull-right"></i></a>
                                        <ul className="treeview-menu">
                                            <li><a href="#"><i className="fa fa-circle-o"></i> Level Three</a></li>
                                            <li><a href="#"><i className="fa fa-circle-o"></i> Level Three</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="#"><i className="fa fa-circle-o"></i> Level One</a></li>
                        </ul>
                    </li>
                    <li><a href="#"><i className="fa fa-book"></i> <span>Documentation</span></a></li>
                    <li className="header">LABELS</li>
                    <li><a href="#"><i className="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
                    <li><a href="#"><i className="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
                    <li><a href="#"><i className="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
                </ul>
            </section>

        );
    }
}