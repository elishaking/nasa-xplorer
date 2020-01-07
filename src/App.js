import React, { Component } from 'react';
import './App.scss';

export default class App extends Component {
  state = {
    searchTerm: ''
  };

  onSubmit = () => {

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
              name="searchTerm"
              placeholder="e.g. moon, mars, jupiter, etc"
              value={searchTerm} />

            <div className="actions">
              <input type="submit" value="Search" />
              <input type="button" value="Today" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}
