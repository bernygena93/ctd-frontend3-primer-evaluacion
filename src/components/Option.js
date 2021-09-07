import React, { Component } from 'react'
import Button from './Button'
import styles from "./styles/component.module.css"

export default class Option extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className={styles.options}>
      <Button idButton={this.props.idButton} optionClick={this.props.optionClick}/>
      <small>{this.props.option}</small>
      </div>
    )
  }
}
