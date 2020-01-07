import React, { Component } from 'react'

export default class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.data = this.props.location.state.data;

    this.items = this.data.collection.items
      .filter(item => item.data[0].media_type === 'image').slice(0, 10);
    console.log(this.items);
  }

  render() {
    return (
      <div>
        {
          this.items.map((item, index) => (
            <div key={index}>

            </div>
          ))
        }
      </div>
    )
  }
}
