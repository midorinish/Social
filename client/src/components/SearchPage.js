import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchResults from '../components/SearchResults';
import Search from '../pages/Search';

export default class SearchPage extends Component {



    render() {
        return (
            <div className="SearchPage">
                <Search />

            </div>
        )
    }
}

