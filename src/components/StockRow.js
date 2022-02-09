import React, { Component } from 'react';
import { stock } from '../resources/stock.js';


class StockRow extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }

  applyData(data) {
    this.setState({
      data: data
    }) 
  }

  componentDidMount() {
    // query the API (push data into state when we get it)
    stock.latestPrice(this.props.ticker, this.applyData.bind(this))
  }

  render() {
    return (
      <tr>
        <td>{this.props.ticker}</td>
        <td>{this.state.data.price}</td>
        <td>{this.state.data.date}</td>
        <td>{this.state.data.time}</td>
      </tr>
    )
  }
}

export default StockRow;