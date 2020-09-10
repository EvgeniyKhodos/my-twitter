import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from "../post-add-form";

import './app.css';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { label: 'Going to learn React', important: true, id: 'dfds' },
                { label: 'Its very good', important: false, id: 'dfsf' },
                { label: 'I will find a cool job', important: false, id: 'qwrt' }
            ]
        }
    }
    render() {
        return (
            <div className="app">
                <AppHeader />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList
                    posts={this.state.data}
                    onDelete={id => console.log(id)} />
                <PostAddForm />
            </div>
        )
    }
}

