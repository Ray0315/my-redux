// src/components/About/index.js
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router'
import './table.css'

export default class Paginate extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        let offset = this.props.offset;
        let limit = this.props.limit;

        const Requirement = (page, limit) => {
            if (page === 1) {
                return { min: 0, max: limit }
            } else {
                return { min: ((page - 1) * limit), max: page * limit }
            }
        }
        let check = Requirement(offset, limit)


        let temp = this.props.data.filter(
            (obj, i) => {
                if ((i >= check.min) && (i < check.max))
                    return true
            }
        )
        // <div key={index}>{val.month}</div>

        let commentNodes = temp.map(function (val, index) {
            return (
                <tr key={index}>
                    <td >{val.month}</td>
                    <td >{val.Sales}</td>
                    <td >{val.money}</td>
                </tr>
            );
        });

        return (
            <div className="set-width">
                <section>
                    <h1>Fixed Table header</h1>
                    <div className="tbl-header">
                        <table cellpadding="0" cellspacing="0" border="0">
                            <thead>
                                <tr>
                                    <th>Month</th>
                                    <th>Salary</th>
                                    <th>Money</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className="tbl-content">
                        <table cellpadding="0" cellspacing="0" border="0">
                            <tbody>
                                {commentNodes}
                            </tbody>
                        </table>
                    </div>
                </section>

            </div>
        );
    }
}

