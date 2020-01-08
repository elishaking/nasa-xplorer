import React, { Component } from 'react';
import axios from 'axios';
import './ImageItem.scss';
import Spinner from './Spinner';

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
      <div className="image-item">
        <header>
          <h2>{itemData.title}</h2>
          {
            itemData.description !== itemData.title && (
              <p>{itemData.description}</p>
            )
          }
        </header>

        {
          imageUrl === '' ? (
            <div className="image-placeholder">
              <Spinner />
            </div>
          ) : (<img src={imageUrl} alt="" />)
        }
      </div>
    )
  }
}
