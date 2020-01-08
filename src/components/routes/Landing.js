import React, { Component } from 'react';
import axios from 'axios';
import Container from '../Container';

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
        // console.log(res.data);
        this.props.history.push('/search', { data: res.data });
      });
  };

  onChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  todaysSpecial = () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=aYpJeaaiCPeZ0Vno5VggoG4iyieKfh7dEN8HPszh`)
      .then((res) => {
        this.props.history.push('/special', { data: res.data });
      });
  }

  render() {
    const { searchTerm } = this.state;

    return (
      <Container className="landing">
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
              <input type="button" value="Today's Special" onClick={this.todaysSpecial} />
            </div>
          </form>
        </div>
      </Container>
    )
  }
}
