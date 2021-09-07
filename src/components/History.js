import React, { Component } from 'react'
import ListOptions from './List'
import Option from './Option'
import styles from "./styles/component.module.css"
import Swal from 'sweetalert2'

export default class History extends Component {
  constructor(props){
      super(props)

      this.state={
        count: 0,
        history:this.props.historyData[0].historia,
        oneOption:this.props.historyData[0].opciones.a,
        twoOption:this.props.historyData[0].opciones.b,
        previousOption: "",
        listOption: [],
        fin: false
      }
  }

  handleClick = option =>{
    if(option === "a"){
    this.setState({
        count: this.state.count + 1,
        previousOption: "A",
    }, () =>{this.setState({
      listOption:[this.state.previousOption.toLocaleUpperCase(),...this.state.listOption],
      history:this.props.historyData[this.state.count].historia,
      oneOption:this.props.historyData[this.state.count].opciones.a,
      twoOption:this.props.historyData[this.state.count].opciones.b,
      count: this.state.count+1
    })})}
    
    else{this.setState({      
      count: this.state.count + 2,
      previousOption: "B",
  }, () =>{this.setState({
    listOption:[this.state.previousOption.toLocaleUpperCase(),...this.state.listOption],
    history:this.props.historyData[this.state.count].historia,
    oneOption:this.props.historyData[this.state.count].opciones.a,
    twoOption:this.props.historyData[this.state.count].opciones.b
  })})}
  if(this.state.listOption.length === 4){
    Swal.fire("Fin de la historia")
    this.setState({
      count: 5,
      fin:true})
  }
  } 
    render() {
    return (
      <div className={styles.container}>
        <h2>{this.state.history}</h2>
        { !this.state.fin &&
        <div className={styles.options}>
        <Option option={this.state.oneOption} setState={this.setState} idButton={"a"} optionClick={this.handleClick}/>
        <Option option={this.state.twoOption} setState={this.setState} idButton={"b"}  optionClick={this.handleClick}/>
        </div>
        }{this.state.fin && <h3>Fin</h3>

        }
        <div>
        <h5>La Opcion elegida anteriormente es la : {this.state.previousOption}</h5>
        <div className={styles.list}>
        <h5>Historial de Opciones elegidas: </h5>
        <ul type="none">
            {this.state.listOption.map((option, index) =><ListOptions data={option} key={index} />)}
        </ul>  
        </div>
        </div>
      </div>
    )
  }
}
