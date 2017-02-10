// src/components/About/index.js
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router'
import Paginate from './utils/Paginate/paginate'
import $ from 'jquery';


export default class TestPaginate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            githubtUrl: '',
            avatarUrl: '',
        }
    }
    componentDidMount() {
        return;
        $.get(this.props.params.source, (result) => {
            console.log(result);
            const data = result;
            if (data) {
                this.setState({
                    username: data.name,
                    githubtUrl: data.html_url,
                    avatarUrl: data.avatar_url
                });
            }
        });
    }
    render() {
        return (
            <div>
                <h1>{this.props.params.source}</h1>
                <h3>{this.state.username}</h3>
                <img src={this.state.avatarUrl} />
                <a href={this.state.githubtUrl}>Github Link</a>.
          </div>
        );
    }
}

