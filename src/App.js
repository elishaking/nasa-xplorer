import React, { Component } from 'react';
import './App.scss';

export default class App extends Component {
  state = {
    searchTerm: ''
  };

  onSubmit = () => {

  };

  onChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  render() {
    const { searchTerm } = this.state;

    return (
      <div className="app">
        <header>
          <nav>
            <h1>Nasa<span>Xplorer</span></h1>
          </nav>
        </header>

        <div className="content">
          <h1 className="headline">Xplore the wonders of the Universe</h1>

          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              name="searchTerm"
              placeholder="e.g. moon, mars, jupiter, etc"
              onChange={this.onChange}
              value={searchTerm} />

            <div className="actions">
              <input type="submit" value="Search" />
              <input type="button" value="Today's Special" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}
