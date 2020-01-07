import React, { Component } from 'react';
import axios from 'axios';

const imagesUrl = 'https://images-api.nasa.gov';

export default class Landing extends Component {
  state = {
    searchTerm: ''
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { searchTerm } = this.state;
    axios.get(`${imagesUrl}/search?q=${searchTerm}`)
      .then((res) => {
        console.log(res.data);
        this.props.history.push('/search', { data: res.data });
      });
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
