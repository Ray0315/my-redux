// src/components/About/index.js
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router'
import ReactPaginate from 'react-paginate';
import $ from 'jquery';


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
        let check = Requirement(offset,limit)

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
                <div key={index}>{val.id}</div>
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
            offset: 1
        }
    }

    loadCommentsFromServer() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'GET',

            success: info => {
                this.setState({ data: info, pageCount: info.length /  this.props.perPage});
            },

            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        });
    }

    componentDidMount() {
        this.loadCommentsFromServer();
    }

    handlePageClick = (data) => {
        let selected = data.selected + 1;
        let offset = selected;
        this.setState({ offset: offset });
    };

    render() {
        return (
            <div className="commentBox">
                <CommentList data={this.state.data} offset={this.state.offset} limit={this.props.perPage} />
                <ReactPaginate previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={<a href="">...</a>}
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

