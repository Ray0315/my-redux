// src/components/About/index.js
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router'
import ReactPaginate from 'react-paginate';
import $ from 'jquery';


export class CommentList extends Component {
    render() {
        console.log(this.props.data);
        // let commentNodes = this.props.data.map(function (comment, index) {
        //     return (
        //         <div key={index}>{comment.comment}</div>
        //     );
        // });

        return (
            <div id="project-comments" className="commentList">
                <ul>
                    1111
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
            offset: 0
        }
    }

    loadCommentsFromServer() {
        $.ajax({
            url: this.props.url,
            data: { limit: this.props.perPage, offset: this.state.offset },
            dataType: 'json',
            type: 'GET',

            success: data => {
                this.setState({ data: data.comments, pageCount: Math.ceil(data.length / 10) });
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
        let selected = data.selected;
        let offset = Math.ceil(selected * this.props.perPage);

        this.setState({ offset: offset }, () => {
            this.loadCommentsFromServer();
        });
    };

    render() {
        return (
            <div className="commentBox">
                <label>{JSON.stringify(this.state.data)}</label>
                <CommentList data={this.state.data} />
                <ReactPaginate previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={<a href="#">...</a>}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={2}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"} />
            </div>
        );
    }
}

