import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Landing from './components/routes/Landing';
import SearchResult from './components/routes/SearchResult';
import Special from './components/routes/Special';

export default class App extends Component {

  render() {
    return (
      <Router>
        <Route path="/" component={Landing} exact />
        <Route path="/search" component={SearchResult} exact />
        <Route path="/special" component={Special} exact />
      </Router>
    );
  }
}
