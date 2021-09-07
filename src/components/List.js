import React, { Component } from 'react'

export default class ListOptions extends Component {
  constructor(props){
      super(props)
  }
    render() {
    return (
      <>
        <li key={this.props.key}>{this.props.data}</li>
      </>
    )
  }
}
