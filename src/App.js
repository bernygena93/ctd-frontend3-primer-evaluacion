import History from "./components/History";
import React, { Component } from 'react'
import historyObject from "./components/data.json";
import styles from "./styles/app.module.css"
import Header from "./components/Header";

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      historyData: [],
      loading: true
    }
  }
      
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        historyData :historyObject,
        loading:false
      })
    },1000)
  }

  render() {
    return (
      <>
      <Header />
      {this.state.loading ? <div className={styles.loading}>Cargando Historia...</div> :
        <div className={styles.container}>
          <History historyData={this.state.historyData}/>
        </div>}
      </>
    )
  }
}
