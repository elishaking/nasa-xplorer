import React, { Component } from 'react'
import Container from '../Container'

export default class Special extends Component {

  render() {
    const { data } = this.props.location.state;
    // console.log(data);

    return (
      <Container className="special">
        <div className="fixed-bg"></div>
        <div className="content">
          <h2>{data.title}</h2>
          <p>{data.explanation}</p>
          <img src={data.url} alt="" />
        </div>
      </Container>
    )
  }
}
