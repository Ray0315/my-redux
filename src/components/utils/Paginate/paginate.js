// src/components/About/index.js
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router'
import ReactPaginate from 'react-paginate';
import $ from 'jquery';
import Table from '../Table/table'


export class CommentList extends Component {
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

        // console.log(this.props.offset);
        // console.log(this.props.limit);
        // console.log(this.props.data);


        let temp = this.props.data.filter(
            (obj, i) => {
                if ((i >= check.min) && (i < check.max))
                    return true
            }
        )

        let commentNodes = temp.map(function (val, index) {
            return (
                <div key={index}>{val.month}</div>
            );
        });

        return (
            <div id="project-comments" className="commentList">
                <ul>
                    {commentNodes}
                </ul>
            </div>
        );
    }
};

export default class Paginate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            nowData: [],
            offset: 1
        }
    }

    loadCommentsFromServer() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'GET',

            success: info => {
                this.setState({ data: info, pageCount: info.length / this.props.perPage });
                this.filterDate();
            },

            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        });
    }

    filterDate() {
        let offset = this.state.offset;
        let limit = this.props.perPage;

        const Requirement = (page, limit) => {
            if (page === 1) {
                return { min: 0, max: limit }
            } else {
                return { min: ((page - 1) * limit), max: page * limit }
            }
        }
        let check = Requirement(offset, limit)


        let temp = this.state.data.filter(
            (obj, i) => {
                if ((i >= check.min) && (i < check.max))
                    return true
            }
        )

        this.setState({ nowData: temp });
        console.log('temp');
        console.log(temp);
    }

    componentDidMount() {
        this.loadCommentsFromServer();
    }

    handlePageClick = (data) => {
        let selected = data.selected + 1;
        let offset = selected;

        this.setState(
            { offset: offset },
            () => {
                this.filterDate();
            });
    };

    render() {
        return (
            <div className="commentBox">
                <Table data={this.state.nowData} />
                <ReactPaginate previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={<a href="#">...</a>}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"} />
            </div>
        );
    }
}

