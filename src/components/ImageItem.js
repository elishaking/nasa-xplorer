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
        imageUrl: res.data.filter(val => val.search(/(\.jpg)|(\.jpeg)|(\.png)/) > 0)[0]
      })
    });
  }

  render() {
    const { itemData } = this.props;
    const { imageUrl } = this.state;

    console.log(itemData);

    return (
      <div className="image-item">
        <header>
          <h2>{itemData.title}</h2>
          {
            itemData.description !== itemData.title && (
              (itemData.description.indexOf('/>') !== -1 || itemData.description.indexOf('</')) !== -1 ?
                (<p dangerouslySetInnerHTML={{ __html: itemData.description }}></p>) : (
                  <p>{itemData.description}</p>
                )
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
