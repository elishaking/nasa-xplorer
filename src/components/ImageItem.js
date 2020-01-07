import React, { Component } from 'react';
import axios from 'axios';

export default class ImageItem extends Component {
  state = {
    imageUrl: ''
  };

  componentDidMount() {
    const url = this.props.url;
    axios.get(url).then((res) => {
      this.setState({
        imageUrl: res.data[0]
      })
    });
  }

  render() {
    const { itemData } = this.props;
    const { imageUrl } = this.state;

    return (
      <div>
        <h2>{itemData.title}</h2>
        <img src={imageUrl} alt="" />
      </div>
    )
  }
}
