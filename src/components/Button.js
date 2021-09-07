import React, { Component } from 'react'
import styles from "./styles/component.module.css"

export default class Button extends Component {
  constructor(props){
      super(props)
    
      this.state={
          id: this.props.idButton
      }
    }
    render() {
    return (
      <>
        <button className={styles.button} type="" onClick={()=>this.props.optionClick(this.state.id)}>{this.state.id.toUpperCase()}</button>
      </>
    )
  }
}
