import React, { Component } from 'react'
import ImageItem from '../ImageItem';
import Container from '../Container';

export default class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.data = this.props.location.state.data;

    this.items = this.data.collection.items
      .filter(item => item.data[0].media_type === 'image').slice(0, 10);
    // console.log(this.items);
  }

  render() {
    return (
      <Container className="search-result">
        {
          this.items.map((item, index) => (
            <ImageItem
              key={index}
              itemData={item.data[0]}
              url={item.href} />
          ))
        }
      </Container>
    )
  }
}
