import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchResults from '../components/SearchResults';

export default class SearchPage extends Component {

    state = {
        result: {}
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="SearchPage">
                <SearchResults />

            </div>
        )
    }
}

