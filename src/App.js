import React, { Component } from 'react'
import './App.css'
import Component1 from './components/compnent1'



export class App extends Component {
  constructor(props){
    super(props)
    this.state={
      input: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
          APP JS
          <Component1/>
      </div>
    )
  }
}

export default App

